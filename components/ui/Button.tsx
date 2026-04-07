import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
};

export function Button({ href, variant = "primary", children, className = "" }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition-colors";
  const styles = {
    primary: "bg-stone-900 text-white hover:bg-stone-800",
    secondary: "border border-stone-300 text-stone-900 hover:bg-stone-50",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
