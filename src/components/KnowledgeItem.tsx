import Image from "next/image";
import {Knowledge} from "@/types/knowledge";

export function KnowledgeItem({id,tagName,icon}:Knowledge) {
  return (
    <>
      <div className='flex p-4 border border-gray-300 rounded items-center gap-4 cursor-pointer'>
        <Image src={icon} alt={tagName} width={40} height={40} />
        <h1>{tagName}</h1>
      </div>
    </>
  );
}