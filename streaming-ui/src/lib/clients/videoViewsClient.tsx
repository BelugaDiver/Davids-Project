"use server"

export async function incrementVideoView(host: string, id: string, address: string) {
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

export async function getVideoViews(host: string, id: string) {

   var options: RequestInit = {
      method: "GET",
      mode: "cors",
      headers: {
         "Content-Type": "application/json",
         "Authorization": `Bearer ${process.env.CMS_TOKEN}`
      }
   }

   var result = await fetch(`${host}/api/views/?filters[videoId][$eq]=${id}&pagination[page]=1&pagination[pageSize]=1`, options)
   var json = await result.json()
   return json.meta.pagination.total;
}
