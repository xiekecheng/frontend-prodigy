import {Knowledge} from "@/types/knowledge";
import {KnowledgeItem} from "@/components/KnowledgeItem";
import {useState} from "react";
import {KnowledgeList} from "@/data/knowledgeData";
import Link from "next/link";

export function KnowledgeBase() {


  // const [ selected, setSelected ] = useState<number|null>(null)

  return (
    <>
      <div className="w-full">
        <h1>KnowledgeBase</h1>

        <ul className="grid md:grid-cols-3 gap-4">
          {
            KnowledgeList.map(item => (
              <li>
                <Link href={`/interview/${item.id}`}>
                  <KnowledgeItem icon={item.icon} id={item.id} tagName={item.tagName}/>
                </Link>
              </li>
            ))
          }

        </ul>
      </div>
    </>
  );
}