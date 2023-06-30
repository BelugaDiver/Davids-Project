import { ISectionClient, Section } from "../interfaces/ISectionClient.Interface"

var sectionClient: ISectionClient = {
   getAsync: async function (): Promise<Section[]> {
      var options: RequestInit = {
         method: "GET",
         mode: "cors",
         headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.CMS_TOKEN}`
         }
      }

      var result = await fetch(`http://${process.env.CMS_Host}/api/sections`, options)
      var json = await result.json()
      var data = json["data"] as Section[]

      return data
   },

   getByIdAsync: function (id: string): Promise<Section> {
      throw new Error("Function not implemented.");
   }
}

export default sectionClient