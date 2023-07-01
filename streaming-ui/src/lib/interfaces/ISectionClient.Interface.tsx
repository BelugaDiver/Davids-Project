export interface ISectionClient {
   getAsync(): Promise<Section[]>,
   getByIdAsync(id: string): Promise<Section>
}

export type Section = {
   title: string,
   body: string,
   background: string,
   justify: string,
   align: string,
   size: string
}