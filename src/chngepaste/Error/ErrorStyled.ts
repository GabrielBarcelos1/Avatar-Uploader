import styled from 'styled-components'

export const ImageContainer = styled.div`
  width: 114px;
  height: 114px;
  max-width: 114px;
  max-height: 114px;
  border-radius: 100%;
  background-color: #C3CBD5;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const PLabelError = styled.p`
  font-size: 16px;
  color: #C64D32;
`
export const PLabelTryAgain = styled.p`
  font-size: 16px;
  color: #3D485F;
  text-decoration: underline;
  margin-top: 15px;
  cursor: pointer;
  @media (max-width: 560px) {
    margin-bottom: 20px;
  }
`
