import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import LogoEmpty from './LogoEmpty'

const handleAddFile = jest.fn()

describe('<LogoEmpty/>', () => {
  it('should check if the text "Drop the image here or click to browse." is on the screen', () => {
    render(<LogoEmpty handleAddFile={handleAddFile} />)
    const majorDescriptionDropText = screen.getByText('Drop the image here or click to browse.')
    expect(majorDescriptionDropText).toBeInTheDocument()
  })
  it('should check if the text "Organization Logo" is on the screen', () => {
    render(<LogoEmpty handleAddFile={handleAddFile} />)
    const minorDescriptionLogoText = screen.getByText('Organization Logo')
    expect(minorDescriptionLogoText).toBeInTheDocument()
  })
  it('should check if the text input file is on the screen', () => {
    render(<LogoEmpty handleAddFile={handleAddFile} />)
    const InputFile = screen.getByTestId('InputFile')
    expect(InputFile).toBeInTheDocument()
  })
  it('should check if the function "handleAddFile" is called when a file is added to input', () => {
    render(<LogoEmpty handleAddFile={handleAddFile} />)
    const file = new File(['(⌐□_□)'], 'file.xml', { type: 'application/xml' })
    const InputFile = screen.getByTestId('InputFile')
    fireEvent.change(InputFile, {
      target: { files: [file] },
    })
    expect(handleAddFile).toBeCalled()
  })
})
