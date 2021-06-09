import styled from 'styled-components'

export const BoxUpload = styled.div`
  background-color: #F2F5F8;
  width: 553px;
  height: 177px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 15px;
  ${(props) => props.theme == 1 && 'border: 3px dashed #C7CDD3;'}
  flex-direction: column;
  color: #677489;
  @media (max-width: 560px) {
    ${(props) => props.results == 2 && 'height: auto;'}
  }
`
export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
