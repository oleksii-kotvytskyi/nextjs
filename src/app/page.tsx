// import Image from "next/image";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Navigation />
      <main className="flex flex-col h-screen w-full bg-slate-200">
        Dog site
      </main>
    </div>
  );
}
