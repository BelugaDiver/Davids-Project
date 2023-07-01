import { Section } from "@/lib/interfaces/ISectionClient.Interface";

export interface ISectionComponent {
   section: Section
}

export function SectionComponent(props: ISectionComponent) {
   var justify = props.section.justify == "left" ? "justify-start" : "justify-end"
   var align = props.section.align == "top" ? "items-start" : "items-end"
   var size = props.section.size == 'large' ? "w-full h-[600px] px-16" : "w-1/2 h-[400px] px-6"
   return (
      props.section.size == 'large' ? (
         <div className={`background-reverse flex ${size} ${justify} ${align} py-8 mx-2 my-8 rounded-xl`}>
            <div className="w-80 h-60 background-corrected rounded-xl p-4">
               <h3 className="text-xl font-bold px-2 py-1">{props.section.title}</h3>
               <p className="px-2 py-1">{props.section.body}</p>
            </div>
         </div>) :
         (<div className={`background-reverse color-reverse ${size} py-8 mx-2 my-8 rounded-xl`}>
            <h3 className="text-xl font-bold px-2 py-1">{props.section.title}</h3>
            <p className="px-2 py-1">{props.section.body}</p>
         </div>)
   )
}