import Link from "next/link";

const HeaderAnimeList = ({title, linkHref, linkTitle}) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
      
      {
        (linkHref && linkTitle) &&
        <Link href={linkHref} className="md:text-xl text-md underline text-color-primary hover:text-color-accent">{linkTitle}</Link>
      }
    </div>
  )
}

export default HeaderAnimeList;