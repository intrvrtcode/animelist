import Link from "next/link";
import Header from "@/components/dashboard/Header";

const Page = () => {
  return (
    <section className="p-4">
      <Header title="My Collections" />

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
        <Link href="/" className="relative border-2 border-color-accent">
          <img src="" className="w-full h-72" />

          <div className="absolute w-full bottom-0 h-16 bg-color-accent flex items-center justify-center">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>

        <Link href="/" className="relative border-2 border-color-accent">
          <img src="" className="w-full h-72" />

          <div className="absolute w-full bottom-0 h-16 bg-color-accent flex items-center justify-center">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>

        <Link href="/" className="relative border-2 border-color-accent">
          <img src="" className="w-full h-72" />

          <div className="absolute w-full bottom-0 h-16 bg-color-accent flex items-center justify-center">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>

        <Link href="/" className="relative border-2 border-color-accent">
          <img src="" className="w-full h-72" />

          <div className="absolute w-full bottom-0 h-16 bg-color-accent flex items-center justify-center">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Page;