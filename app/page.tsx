import { Hero } from "@/components/home/Hero";
import { Pitch } from "@/components/home/Pitch";
import { Stats } from "@/components/home/Stats";
import { TwoWaysIn } from "@/components/home/TwoWaysIn";
import { SocialProof } from "@/components/home/SocialProof";

export default function Home() {
  return (
    <>
      <Hero />
      <Pitch />
      <Stats />
      <TwoWaysIn />
      <SocialProof />
    </>
  );
}
