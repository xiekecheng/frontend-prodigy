import {Inter} from "next/font/google";
import SearchBox from "@/components/SearchBox";
import {KnowledgeBase} from "@/components/KnowledgeBase";
import {Footer} from "@/components/Footer";

const inter = Inter({subsets: ["latin"]});

export default function Home() {

  return (
    <>
      <main className="container max-w-5xl mx-auto">
        <SearchBox/>
        <KnowledgeBase/>
      </main>
      <Footer/>
    </>
  );
}
