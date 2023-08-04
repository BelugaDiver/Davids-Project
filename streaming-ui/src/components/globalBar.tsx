import Link from "next/link"
import Logo from "./logo"

export default function GlobalBar() {
   return (
      <header role="header" className="flex items-center justify-between w-full p-4 px-7">
         <Link href="/">
            <Logo width={120} height={30} svgClass={"logo"} />
         </Link>
         <div className="flex items-stretch justify-between text-lg">
            <Link className="px-2 hover:font-semibold" href="/videos">Videos</Link>
            <Link className="px-2 hover:font-semibold" href="/about">About</Link>
            <Link className="px-2 hover:font-semibold" href="/resources">Resources</Link>
         </div>
      </header>
   )
}