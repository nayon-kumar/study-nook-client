import Hero from "@/components/Home/Hero";
import How from "@/components/Home/How";
import Why from "@/components/Home/Why";
import MyContainer from "@/components/shared/MyContainer";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Why />
        <How />
      </main>
    </div>
  );
}
