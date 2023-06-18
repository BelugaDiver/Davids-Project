import Home from "@/app/page";
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

describe("Home", () => {
   it("renders the homepage", () => {
      render(<Home />)
      const mainBody = screen.getByRole("main")
      const header = screen.getByRole("header")
      const footer = screen.getByRole("footer")

      expect(mainBody).toBeInTheDocument()
      expect(header).toBeInTheDocument()
      expect(footer).toBeInTheDocument()
   })
})    