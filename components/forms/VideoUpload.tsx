"use client";

import { useCallback, useRef, useState } from "react";

type VideoUploadProps = {
  applicationType: "operator" | "builder";
  onUploaded: (url: string) => void;
};

export function VideoUpload({ applicationType, onUploaded }: VideoUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "validating" | "uploading" | "done" | "error">("idle");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  const validateAndUpload = useCallback(
    async (file: File) => {
      setError("");
      setStatus("validating");
      setFileName(file.name);

      // Validate type
      const allowed = ["video/mp4", "video/quicktime", "video/webm"];
      if (!allowed.includes(file.type)) {
        setError("Please upload an MP4, MOV, or WebM file.");
        setStatus("error");
        return;
      }

      // Validate size (100MB)
      if (file.size > 100 * 1024 * 1024) {
        setError("Video must be under 100MB.");
        setStatus("error");
        return;
      }

      // Validate duration
      const duration = await getVideoDuration(file);
      if (duration > 65) {
        setError("Video must be 60 seconds or less.");
        setStatus("error");
        return;
      }

      setStatus("uploading");

      try {
        const ext = file.name.split(".").pop() || "mp4";
        const res = await fetch(`/api/upload-url?ext=${ext}&type=${applicationType}`);
        if (!res.ok) throw new Error("Failed to get upload URL");
        const { url, publicUrl } = await res.json();

        // Upload directly to R2
        const xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", (e) => {
          if (e.lengthComputable) setProgress(Math.round((e.loaded / e.total) * 100));
        });

        await new Promise<void>((resolve, reject) => {
          xhr.onload = () => (xhr.status >= 200 && xhr.status < 300 ? resolve() : reject(new Error("Upload failed")));
          xhr.onerror = () => reject(new Error("Upload failed"));
          xhr.open("PUT", url);
          xhr.setRequestHeader("Content-Type", file.type);
          xhr.send(file);
        });

        setStatus("done");
        onUploaded(publicUrl);
      } catch {
        setError("Upload failed. Please try again.");
        setStatus("error");
      }
    },
    [applicationType, onUploaded]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) validateAndUpload(file);
    },
    [validateAndUpload]
  );

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer rounded-xl border-2 border-dashed border-stone-300 bg-stone-50 p-8 text-center transition-colors hover:border-stone-400"
      >
        <input
          ref={inputRef}
          type="file"
          accept="video/mp4,video/quicktime,video/webm"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) validateAndUpload(file);
          }}
        />

        {status === "idle" && (
          <>
            <p className="text-sm font-medium text-stone-700">
              Drop your video here or click to upload
            </p>
            <p className="mt-1 text-xs text-stone-500">MP4, MOV, or WebM &middot; Max 60 seconds &middot; Max 100MB</p>
          </>
        )}

        {status === "validating" && (
          <p className="text-sm text-stone-600">Validating {fileName}...</p>
        )}

        {status === "uploading" && (
          <div>
            <p className="text-sm font-medium text-stone-700">Uploading {fileName}...</p>
            <div className="mx-auto mt-3 h-2 max-w-xs overflow-hidden rounded-full bg-stone-200">
              <div
                className="h-full rounded-full bg-stone-900 transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-stone-500">{progress}%</p>
          </div>
        )}

        {status === "done" && (
          <p className="text-sm font-medium text-green-700">
            &#10003; {fileName} uploaded successfully
          </p>
        )}

        {status === "error" && (
          <div>
            <p className="text-sm font-medium text-red-600">{error}</p>
            <p className="mt-1 text-xs text-stone-500">Click to try again</p>
          </div>
        )}
      </div>
    </div>
  );
}

function getVideoDuration(file: File): Promise<number> {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.preload = "metadata";
    video.onloadedmetadata = () => {
      URL.revokeObjectURL(video.src);
      resolve(video.duration);
    };
    video.onerror = () => resolve(0);
    video.src = URL.createObjectURL(file);
  });
}
