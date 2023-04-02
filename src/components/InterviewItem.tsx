import {QuestionType} from "@/types/knowledge";
import { AiOutlineArrowRight } from "react-icons/ai";

export function InterviewItem({title,category,level,tagId}:QuestionType) {
  return (
    <>
    <div className='flex gap-4 py-6 group border-b cursor-pointer'>
      <div>
        <p className='p-2'>{category}</p>
        <p className='p-2'>问答题</p>
      </div>
      <div className='relative flex-1'>
        <h2 className='p-2 text-2xl font-medium'>{title}</h2>
        <p className='p-2'>难度:{level}</p>
        <AiOutlineArrowRight className='ease-in opacity-0 group-hover:opacity-100 -translate-x-6 group-hover:translate-x-0 duration-300 group-hover:inline-block absolute right-0 top-1/2 w-8 h-8 text-blue-400'/>
      </div>
    </div>
    </>
  );
}