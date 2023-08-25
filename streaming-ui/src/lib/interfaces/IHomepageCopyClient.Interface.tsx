export interface IHomepageCopyClient {
   getAsync(): Promise<Copy[]>
}

export type Copy = {
   Copy: string
}