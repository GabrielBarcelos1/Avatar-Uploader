import styled from 'styled-components'

export const BoxlabelInfos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: 600;
  color:  #495567;
  font-size: 14px;  
`

export const BoxTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  @media (max-width: 560px) {
    margin-top: 20px;
  }
`
export const LabelDescription = styled.p`
  font-size: 14px;
  margin-top: 10px;
  font-weight: normal;
  @media (max-width: 560px) {
    margin-bottom: 20px;
  }
`
export const InputFile = styled.input`
  width: 553px;
  height: 175px;
  position: absolute;
  border-radius: 15px;
  opacity: 0;
  cursor: pointer;
  border: 3px;
  margin: -2px 0px 0px -2px;
  @media (max-width: 560px) {
    width: 99%;
    ${(props) => props.results && 'height: 220px;'}
  }
`
