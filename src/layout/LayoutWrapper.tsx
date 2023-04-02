import {ReactNode} from "react";
import Navbar from "@/components/Navbar";

export function LayoutWrapper({children}: {children: ReactNode}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}