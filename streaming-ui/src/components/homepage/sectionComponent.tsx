import { Section } from "@/lib/interfaces/ISectionClient.Interface";

export interface ISectionComponent {
   section: Section
}

export function SectionComponent(props: ISectionComponent) {
   return (
      <div>
         <h3 className="text-xl font-bold">{props.section.title}</h3>
         <p>{props.section.body}</p>
      </div>
   )
}