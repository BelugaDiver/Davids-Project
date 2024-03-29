import { Section } from "@/lib/interfaces/ISectionClient.Interface";
import { Button } from "@mui/joy";
import Link from "next/link";

export interface ISectionComponent {
   section: Section
}

export function SectionComponent(props: ISectionComponent) {
   var justify = props.section.justify == "left" ? "justify-start" : "justify-end"
   var align = props.section.align == "top" ? "items-start" : "items-end"
   var size = props.section.size == 'large' ? " md:w-11/12 lg:w-full h-[600px] px-16" : "w-1/2 h-[400px] px-6"

   var style = {
      backgroundImage: `url(${process.env.CMS_Host}${props.section.size == 'large' ? props.section.largeBackground : props.section.smallBackground})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
   }
   return (
      props.section.size == 'large' ? (
         <div className="flex items-center justify-center">
            <div style={style} className={`background-reverse flex ${size} ${justify} ${align} py-8 mx-2 my-8 rounded-xl`}>
               <div className="w-80 h-60 background-corrected rounded-xl p-4">
                  <h3 className="text-xl font-bold px-2 py-1">{props.section.title}</h3>
                  <p className="px-2 py-1">{props.section.body}</p>
                  <div className="py-4 px-2">
                     {props.section.cta != null ?
                        <Link href={props.section.link}><Button className="bg-blue-500">{props.section.cta}</Button></Link>
                        : null}
                  </div>
               </div>
            </div>
         </div>) :
         (<div style={style} className={`background-reverse ${size} py-8 mx-2 my-8 rounded-xl`}>
            <h3 className="font-bold text-4xl px-2 py-1">{props.section.title}</h3>
            <p className="px-2 py-1">{props.section.body}</p>
         </div>)
   )
}