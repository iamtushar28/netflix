import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      {/* Navbar component */}
      <Navbar />
      {/* hero component */}
      <Hero />
    </div>
  );
}
