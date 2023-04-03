import {useRouter} from "next/router";

export default function Navbar() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <div className="w-full h-20 bg-gray-200">
      <div className="container mx-auto flex items-center justify-between h-full">
        <div className="text-2xl cursor-pointer flex" onClick={handleLogoClick}>
          <img src="/static/feweb.svg" alt="FE Prodigy" className='w-8 h-8 mr-2'/>
          <h1>FE Prodigy</h1>
        </div>
        <span className="cursor-pointer">Dark Mode</span>
      </div>
    </div>
  );
}