import { BsFillExclamationCircleFill } from 'react-icons/bs'
import {
  ImageContainer,
  PLabelError,
  PLabelTryAgain,
} from './ErrorStyled'
import {
  BoxCropImage,
  MinorBoxImage,
  MinorBoxCrop,
  BoxIconClose,
  IconClose,
  BoxIconCloseResponsive,
  IconCloseResponsive,
} from '../../helpers/HelperStyles'

type TProps = {
  handleGoBackFirstStage: () => void
}
export default function Error({ handleGoBackFirstStage }: TProps) {
  return (
    <BoxCropImage>
      <BoxIconCloseResponsive>
        <IconCloseResponsive size={27} color="#677489" onClick={handleGoBackFirstStage} cursor="pointer" />
      </BoxIconCloseResponsive>
      <MinorBoxImage data-testid="circleImage">
        <ImageContainer>
          <BsFillExclamationCircleFill color="#fff" fontSize={23} data-testid="IconExclamation" />
        </ImageContainer>
      </MinorBoxImage>
      <MinorBoxCrop>
        <PLabelError>Sorry, the upload failed.</PLabelError>
        <PLabelTryAgain onClick={handleGoBackFirstStage}>Try again.</PLabelTryAgain>
      </MinorBoxCrop>
      <BoxIconClose>
        <IconClose size={27} color="#677489" onClick={handleGoBackFirstStage} cursor="pointer" data-testid="IconGoback" />
      </BoxIconClose>
    </BoxCropImage>
  )
}
