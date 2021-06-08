import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Error from './Error'

const handleGoBackFirstStage = jest.fn()

describe('<Error/>', () => {
  it('should check if the text "Sorry, the upload failed." is on the screen', () => {
    render(<Error handleGoBackFirstStage={handleGoBackFirstStage} />)
    const uploadFailedText = screen.getByText('Sorry, the upload failed.')
    expect(uploadFailedText).toBeInTheDocument()
  })
  it('should check if the text "Try again" is on the screen', () => {
    render(<Error handleGoBackFirstStage={handleGoBackFirstStage} />)
    const tryAgainText = screen.getByText('Try again.')
    expect(tryAgainText).toBeInTheDocument()
  })
  it('should check if the icon "Exclamation" is on the screen', () => {
    render(<Error handleGoBackFirstStage={handleGoBackFirstStage} />)
    const IconExclamation = screen.getByTestId('IconExclamation')
    expect(IconExclamation).toBeInTheDocument()
  })
  it('should check if the circle image is on the screen', () => {
    render(<Error handleGoBackFirstStage={handleGoBackFirstStage} />)
    const circleImage = screen.getByTestId('circleImage')
    expect(circleImage).toBeInTheDocument()
  })
  it('should check if the icon "Close" is on the screen', () => {
    render(<Error handleGoBackFirstStage={handleGoBackFirstStage} />)
    const IconGoback = screen.getByTestId('IconGoback')
    expect(IconGoback).toBeInTheDocument()
  })
  it('should check if function "handleGoBackFirstStage" is called when user click in icon "Close"', () => {
    render(<Error handleGoBackFirstStage={handleGoBackFirstStage} />)
    const IconGoback = screen.getByTestId('IconGoback')
    fireEvent.click(IconGoback)
    expect(handleGoBackFirstStage).toBeCalled()
  })
  it('should check if function "handleGoBackFirstStage" is called when user click in text "try again"', () => {
    render(<Error handleGoBackFirstStage={handleGoBackFirstStage} />)
    const tryAgainText = screen.getByText('Try again.')
    fireEvent.click(tryAgainText)
    expect(handleGoBackFirstStage).toBeCalled()
  })
})
