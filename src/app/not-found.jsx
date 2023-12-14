"use client"
import { FileSearch } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="max-h-[500px] h-screen min-w-screen-lg flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3 text-2xl text-color-accent">
        <div className="flex justify-center items-center gap-3">
          <FileSearch size={32} /> | <h3 className="">Page Not Found</h3>
        </div>

        <button onClick={() => router.back()} href={'/'} className="text-lg underline">Back</button>
      </div>
    </div>
  )
}

export default Page;