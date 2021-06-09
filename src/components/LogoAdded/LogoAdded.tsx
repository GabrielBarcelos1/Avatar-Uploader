import React, { useState, useCallback, useEffect } from 'react'
import ReactCrop from 'react-easy-crop'
import { triggerBase64Download } from 'react-base64-downloader'
import {
  ImageContainer,
  ButtonSaveContainer,
  ButtonSave,
} from './LogoAddedStyle'
import {
  BoxCropImage,
  MinorBoxImage,
  MinorBoxCrop,
  BoxIconClose,
  IconClose,
  IconCloseResponsive,
  BoxIconCloseResponsive,
} from '../../helpers/HelperStyles'
import LogoEmpty from '../LogoEmpty/LogoEmpty'
import Slider from '../Slider/Slider'
import { getCroppedImg } from '../../helpers/Helpers'

type TProps = {
  handleGoBackFirstStage: () => void
  userImage: string
  handleAddFile: (e: React.ChangeEvent<HTMLInputElement>) => void
  setThemeRadius: React.Dispatch<React.SetStateAction<number>>
  setCutedImage: React.Dispatch<React.SetStateAction<any>>
  cutedImage: string
}
type TPixelCrop = {
  width: number
  height: number
  x: number
  y: number
}

export default function LogoAdded(props:TProps) {
  const {
    handleGoBackFirstStage,
    userImage,
    handleAddFile,
    setThemeRadius,
    setCutedImage,
    cutedImage,
  } = props

  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [isCutImage, setIsCutImage] = useState(false)
  const [dimensionsToCrop, setDimensionsToCrop] = useState<TPixelCrop>({
    width: 0, height: 0, x: 0, y: 0,
  })

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setDimensionsToCrop({
      width: croppedAreaPixels.width,
      height: croppedAreaPixels.height,
      x: croppedArea.x,
      y: croppedAreaPixels.y,
    })
  }, [])

  useEffect(() => {
    setIsCutImage(false)
    setZoom(1)
    setThemeRadius(2)
  }, [userImage])

  useEffect(() => {
    isCutImage && setThemeRadius(1)
  }, [isCutImage])

  const saveImage = async () => {
    setIsCutImage(true)
    setCutedImage(await getCroppedImg(userImage, dimensionsToCrop))
  }
  return (
    <BoxCropImage>
      {!isCutImage
        && (
        <BoxIconCloseResponsive>
          <IconCloseResponsive size={27} color="#677489" onClick={handleGoBackFirstStage} cursor="pointer" />
        </BoxIconCloseResponsive>
        )}
      <MinorBoxImage>
        <ImageContainer
          data-testid="ImageCropper"
          theme={isCutImage}
          onClick={() => isCutImage
         && triggerBase64Download(cutedImage, 'Avatar Croped')}
        >
          <ReactCrop
            cropShape="round"
            showGrid={false}
            image={userImage}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropComplete={onCropComplete}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            disableAutomaticStylesInjection
          />
        </ImageContainer>
      </MinorBoxImage>
      {!isCutImage
        ? (
          <>
            <MinorBoxCrop>
              <p>Crop</p>
              <Slider
                data-testid="Slider"
                zoom={zoom}
                setZoom={setZoom}
              />
              <ButtonSaveContainer>
                <ButtonSave onClick={() => saveImage()}>Save</ButtonSave>
              </ButtonSaveContainer>
            </MinorBoxCrop>
            <BoxIconClose>
              <IconClose
                size={27}
                color="#677489"
                onClick={handleGoBackFirstStage}
                cursor="pointer"
                data-testid="IconGoback"
              />
            </BoxIconClose>
          </>
        )
        : <LogoEmpty handleAddFile={handleAddFile} responsiveBox={1} />}
    </BoxCropImage>
  )
}
