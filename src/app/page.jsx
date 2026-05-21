import Available from "@/components/Home/Available";
import Hero from "@/components/Home/Hero";
import How from "@/components/Home/How";
import Why from "@/components/Home/Why";

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
