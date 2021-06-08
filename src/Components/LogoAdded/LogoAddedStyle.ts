import styled from 'styled-components'
import ImageDowload from '../../Assets/download.png'

export const ImageContainer = styled.div`
  width: 114px;
  height: 114px;
  max-width: 114px;
  max-height: 114px;
  border-radius: 100%;
  overflow: hidden;
  z-index: 10;
  &:hover&::before {
    content: '';
    ${(props) => (props.theme === true ? 'width: 110px;' : ' width: 0px ;')}
    position: absolute;
    height: 114px;
    z-index: 1;
    border-radius: 100%;
    opacity: 0.6;
    background: url(${ImageDowload});
    background-color: black;
    background-size: 90px;
    background-repeat: no-repeat;
    background-position-x: 14px;
    background-position-y: 10px;
  }
`
export const ButtonSaveContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 22px;
  @media (max-width: 560px) {
    justify-content: center;
    margin: 10px 0px 20px 0px;
}
`
export const ButtonSave = styled.button`
  color: #fff;
  width: 109px;
  height: 32px;
  background-color: #3D485F;
  border: 0;
  border-radius: 16px;
  cursor: pointer;
`
