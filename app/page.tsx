import { Hero } from "@/components/home/Hero";
import { Pitch } from "@/components/home/Pitch";
import { TwoWaysIn } from "@/components/home/TwoWaysIn";
import { Stats } from "@/components/home/Stats";
import { SocialProof } from "@/components/home/SocialProof";
import { Close } from "@/components/home/Close";

export default function Home() {
  return (
    <>
      <Hero />
      <Pitch />
      <TwoWaysIn />
      <Stats />
      <SocialProof />
      <Close />
    </>
  );
}
