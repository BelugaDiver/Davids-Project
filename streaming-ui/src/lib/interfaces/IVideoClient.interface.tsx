export interface IVideoClient {
   getAsync(): Promise<Video[]>,
   getByIdAsync(id: string): Promise<Video>
   incrementVideoView(id: string): undefined | any
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