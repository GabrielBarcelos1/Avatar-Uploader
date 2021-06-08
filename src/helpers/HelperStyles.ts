import styled, { createGlobalStyle } from 'styled-components'
import { IoMdClose } from 'react-icons/io'

export const GlobalStyle = createGlobalStyle`
  *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Inter' , sans-serif;
  }
  img{
    width: 114px;
    height: 114px;
  }
`
export const BoxCropImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 560px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
`
export const MinorBoxImage = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 31px;
  @media (max-width: 560px) {
    margin-top: 20px;
    width: 40%;
  }
`
export const MinorBoxCrop = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 32px ;
  @media (max-width: 560px) {
    align-items: center;
    margin-top: 20px;
}
`
export const BoxIconClose = styled.div`
  width: 10%;
  display: flex;
  justify-content: flex-start;
  height: 70%;
  margin: auto;
`
export const IconClose = styled(IoMdClose)`
  @media (max-width: 560px) {
    display: none;
  }
`
export const IconCloseResponsive = styled(IoMdClose)`
  @media (min-width: 560px) {
    display: none;
  }
`
export const BoxIconCloseResponsive = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: 20px;
  @media (min-width: 560px) {
  display: none;
  }
`
