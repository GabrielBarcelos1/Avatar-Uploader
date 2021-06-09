import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import LogoAdded from './LogoAdded'

const handleGoBackFirstStage = jest.fn()
const handleAddFile = jest.fn()
const setThemeRadius = jest.fn()
const setIsCutImage = jest.fn()

const renderPage = () => {
  render(
    <LogoAdded
      handleGoBackFirstStage={handleGoBackFirstStage}
      userImage="imageSrc"
      handleAddFile={handleAddFile}
      setThemeRadius={setThemeRadius}
      setCutedImage={setIsCutImage}
      cutedImage="imageCuted"
    />,
  )
}

describe('<Error/>', () => {
  it('should check if the text "Crop" is on the screen', () => {
    renderPage()
    const CropText = screen.getByText('Crop')
    expect(CropText).toBeInTheDocument()
  })
  it('should check if the icon "Close" is on the screen', () => {
    renderPage()
    const IconGoback = screen.getByTestId('IconGoback')
    expect(IconGoback).toBeInTheDocument()
  })
  it('should check if the button "save" is on the screen', () => {
    renderPage()
    const SaveButton = screen.getByText('Save')
    expect(SaveButton).toBeInTheDocument()
  })
  it('should check if the slider is on the screen', () => {
    renderPage()
    const Slider = screen.getByTestId('Slider')
    expect(Slider).toBeInTheDocument()
    expect(Slider).toHaveClass('MuiSlider-root')
  })
  it('should check if the image cropper is on the screen', () => {
    renderPage()
    const ImageCropper = screen.getByTestId('ImageCropper')
    expect(ImageCropper).toBeInTheDocument()
  })
  it('should check if function "handleGoBackFirstStage" is called when user click in icon "Close"', () => {
    renderPage()
    const IconGoback = screen.getByTestId('IconGoback')
    fireEvent.click(IconGoback)
    expect(handleGoBackFirstStage).toBeCalled()
  })
  it('should check if function "setThemeRadius" is called when user click in button "Save"', () => {
    renderPage()
    const SaveButton = screen.getByText('Save')
    fireEvent.click(SaveButton)
    expect(setThemeRadius).toBeCalled()
  })
  it('should check if text "Organization Logo" is on the screen after clicking the save button', () => {
    renderPage()
    const SaveButton = screen.getByText('Save')
    fireEvent.click(SaveButton)
    const OrganizationLogoText = screen.getByText('Organization Logo')
    expect(OrganizationLogoText).toBeInTheDocument()
  })
  it('should check if text "Drop the image here or click to browse." is on the screen after clicking the save button', () => {
    renderPage()
    const SaveButton = screen.getByText('Save')
    fireEvent.click(SaveButton)
    const DropImageText = screen.getByText('Drop the image here or click to browse.')
    expect(DropImageText).toBeInTheDocument()
  })
})
