import CMSClient from "@/lib/clients/CMSClient";
import { Section } from "@/lib/interfaces/ISectionClient.Interface";
import { Video } from "@/lib/interfaces/IVideoClient.interface";
import fetchMock from "jest-fetch-mock";

describe("CMS client tests", () => {
   beforeAll(() => {
      require('jest-fetch-mock').enableMocks()
   })

   test("gets a list of sections", async () => {
      var expected: Section[] = []
      fetchMock.mockResponse(req =>
         req.url === `http://${process.env.CMS_Host}/api/sections`
            ? Promise.resolve(`{
                                 "data": [],
                                 "meta": {
                                    "pagination": {
                                          "page": 1,
                                          "pageSize": 25,
                                          "pageCount": 0,
                                          "total": 0
                                    }
                                 }
                              }`)
            : Promise.reject(new Error('bad url'))
      )

      var result = await CMSClient.sections.getAsync()

      expect(result.length).toBeGreaterThanOrEqual(expected.length)
   })

   test("gets a list of videos", async () => {
      var expected: Video[] = []
      fetchMock.mockResponse(req =>
         req.url === `http://${process.env.CMS_Host}/api/videos`
            ? Promise.resolve(`{
                                 "data": [],
                                 "meta": {
                                    "pagination": {
                                          "page": 1,
                                          "pageSize": 25,
                                          "pageCount": 0,
                                          "total": 0
                                    }
                                 }
                              }`)
            : Promise.reject(new Error('bad url'))
      )

      var result = await CMSClient.videos.getAsync()

      expect(result.length).toBeGreaterThanOrEqual(expected.length)
   })
})