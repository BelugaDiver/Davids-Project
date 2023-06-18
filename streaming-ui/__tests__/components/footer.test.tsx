import Footer from "@/components/footer";
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

describe("Footer", () => {
   it("renders the footer", () => {
      render(<Footer />)
      const footer = screen.getByRole("footer")

      expect(footer).toBeInTheDocument()
   })
})    