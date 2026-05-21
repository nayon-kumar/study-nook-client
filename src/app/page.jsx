import Available from "@/components/Home/Available";
import Hero from "@/components/Home/Hero";
import How from "@/components/Home/How";
import Why from "@/components/Home/Why";
import MyContainer from "@/components/shared/MyContainer";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Available />
        <Why />
        <How />
      </main>
    </div>
  );
}
