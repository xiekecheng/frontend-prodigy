import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import {KnowledgeBase} from "@/components/KnowledgeBase";
import {Footer} from "@/components/Footer";
import {useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Navbar />
      <main className='container max-w-5xl mx-auto'>
        <SearchBox />
        <KnowledgeBase />
      </main>
      <Footer />
    </>
  )
}
