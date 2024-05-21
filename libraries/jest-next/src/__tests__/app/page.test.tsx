import { render, screen } from '@testing-library/react'

import Home from '@app/page'

describe('Home', () => {
  test('should renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: 'Docs ->',
    })

    expect(heading).toBeInTheDocument()
  })

  test('should renders an image', () => {
    render(<Home />)

    const image = screen.getByRole('img', {
      name: 'Vercel Logo',
    })

    expect(image).toBeInTheDocument()
  })
})
