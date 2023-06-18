import Logo from "./logo"

export default function GlobalBar() {
   return (
      <header role="header" className="flex items-center justify-between w-full p-4 px-7">
         <a href="/">
            <Logo width={120} height={30} svgClass={"logo"} />
         </a>
         <div className="flex items-stretch justify-between text-lg">
            <a className="px-2" href="/about">About</a>
            <a className="px-2" href="/resources">Resources</a>
         </div>
      </header>
   )
}