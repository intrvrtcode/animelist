"use client"
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="max-h-[500px] h-screen min-w-screen-lg flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3 text-2xl text-color-accent">
        <div className="flex justify-center items-center gap-3">
          <FileSearch size={32} /> | <h3 className="">Page Not Found</h3>
        </div>

        <Link href={'/'} className="text-lg underline">Back to home</Link>
      </div>
    </div>
  )
}

export default Page;