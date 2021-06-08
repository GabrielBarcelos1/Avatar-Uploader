import React, { useState, useEffect } from 'react'
import LogoEmpty from '../../components/LogoEmpty/LogoEmpty'
import LogoAdded from '../../components/LogoAdded/LogoAdded'
import Error from '../../components/Error/Error'
import { BoxUpload, PageContainer } from './UploaderStyle'
import { prepareImage } from '../../helpers/Helpers'
import { permitedImageExtensions } from '../../helpers/Constants'

export default function Uploader() {
  const [step, setStep] = useState(1)
  const [userImage, setUserImage] = useState<any>()
  const [themeRadius, setThemeRadius] = useState(1)
  const [responsiveBox, setResponsiveBox] = useState(1)
  const [cutedImage, setCutedImage] = useState('')

  const handleAddFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    setResponsiveBox(2)
    if (!permitedImageExtensions.includes(e.target.files[0].type)) {
      setThemeRadius(2)
      setStep(3)
      return
    }
    setStep(2)
    const imagePrepared = await prepareImage(e.target.files[0])
    setUserImage(imagePrepared)
  }

  const handleGoBackFirstStage = () => {
    setStep(1)
    setThemeRadius(1)
    setResponsiveBox(1)
  }

  useEffect(() => {
    cutedImage && console.log(`Base64 of cuted image${cutedImage}`)
  }, [cutedImage])

  return (
    <PageContainer>
      <BoxUpload theme={themeRadius} results={responsiveBox}>
        { step === 1
          ? <LogoEmpty handleAddFile={handleAddFile} />
          : step === 2
            ? (
              <LogoAdded
                handleGoBackFirstStage={handleGoBackFirstStage}
                userImage={userImage}
                handleAddFile={handleAddFile}
                setThemeRadius={setThemeRadius}
                setCutedImage={setCutedImage}
                cutedImage={cutedImage}
              />
            )
            : <Error handleGoBackFirstStage={handleGoBackFirstStage} />}
      </BoxUpload>
    </PageContainer>
  )
}
