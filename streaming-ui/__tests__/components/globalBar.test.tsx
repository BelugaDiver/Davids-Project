import GlobalBar from "@/components/globalBar";
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

describe("Global Bar", () => {
   it("renders the global header", () => {
      render(<GlobalBar />)
      const globalBar = screen.getByRole("header")

      expect(globalBar).toBeInTheDocument()
   })

   it("displays a logo", () => {
      render(<GlobalBar />)
      const logo = screen.getByRole("logo")

      expect(logo).toBeInTheDocument()
      expect(logo).toBeVisible()
   })
})    