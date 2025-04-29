import Image from "next/image";
import Hero from "./components/Hero/page";
import Products from "./components/Products";

export default function Home() {
  return (
    <>
    <main>
      <Hero />
      <Products />
    </main>
    </>
  );
}
