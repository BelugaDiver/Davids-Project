export interface IVideoClient {
   getAsync(): Promise<Video[]>,
   getByIdAsync(id: string): Promise<Video>
}

export type Video = {
   name: string,
   description: string,
   createdAt: string,
   views: number,
   videoId: string,
   thumbnail: string,
   url: string
}