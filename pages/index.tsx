import Image from "next/image";
import { Inter } from "next/font/google";
import HeadNav from "@/components/HeadNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HeadNav />
      <Footer />
    </main>
  );
}
