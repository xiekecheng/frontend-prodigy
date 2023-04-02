import {useRouter} from "next/router";

export default function Navbar() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <div className="w-full h-20 bg-gray-200">
      <div className="container mx-auto flex items-center justify-between h-full">
        <h1 className="text-2xl cursor-pointer" onClick={handleLogoClick}>FE Prodigy</h1>
        <span className="cursor-pointer">Dark Mode</span>
      </div>
    </div>
  );
}