"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
  const searchRef = useRef('')
  const router = useRouter();
  
  const HandleSearch = (e) => {
    e.preventDefault();
    const keyword = searchRef.current.value;

    if(!keyword) return null;

    router.push(`/search/${keyword}`)
  }

  return (
    <div className="relative">
      <input className="p-2 rounded w-full" type="text" placeholder="Cari anime..." ref={searchRef} onKeyUp={(e) => {
        if(e.key === 'Enter') {
          HandleSearch(e)
        }
      }} />

      <button className="absolute top-2 end-2" onClick={HandleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  )
}

export default InputSearch