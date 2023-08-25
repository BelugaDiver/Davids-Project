"use server"

export default async function incrementVideoView(host: string, id: string, address: string) {
   var options: RequestInit = {
      method: "POST",
      mode: "cors",
      headers: {
         "Content-Type": "application/json",
         "Authorization": `Bearer ${process.env.CMS_TOKEN}`
      },
      body: JSON.stringify({
         data: {
            videoId: id,
            IpAddress: address
         }
      })
   }

   var result = await fetch(`${host}/api/views/`, options)
}