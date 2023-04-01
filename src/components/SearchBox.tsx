import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBox() {

  return(
    <div className=' my-10'>
      <div className='relative'>
        <input className='w-full rounded px-10 py-2 border border-gray-300' type="text" placeholder='搜一搜'/>
        <AiOutlineSearch className='absolute text-gray-400 top-2 left-3 w-6 h-6' />
      </div>
    </div>
  )
}