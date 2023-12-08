"use client"

import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({title}) => {
  const router = useRouter();

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  }

  return(
    <div className="flex gap-x-6 items-center justify-between md:justify-start">
        <button onClick={handleBack}>
          <ArrowSquareLeft className="text-color-primary" size={35} />
        </button>

        <h3 className="text-3xl text-color-primary">{title}</h3>
      </div>
  )
}

export default Header;