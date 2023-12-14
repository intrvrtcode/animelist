"use client"

import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  }

  return (
    <div className="flex gap-x-6 items-center md:justify-between">
      <button onClick={handleBack} className="flex flex-nowrap gap-x-2 items-center text-color-primary hover:text-color-accent transition-colors">
        <ArrowSquareLeft size={35} />
        <span className="text-2xl">Back</span>
      </button>

      <h3 className="text-3xl text-color-primary">{title}</h3>
    </div>
  )
}

export default Header;