export interface ISectionClient {
   getAsync(): Section[],
   getByIdAsync(id: string): Section
}

export type Section = {
   title: string,
   body: string,
   background: string,
   justify: string
}