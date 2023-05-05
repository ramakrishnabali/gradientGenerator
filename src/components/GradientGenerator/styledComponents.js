// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(${props => props.gradient});
  min-height: 100vh;
  color: #ededed;
`
export const MainHeading = styled.h1`
  font-size: 30px;
  font-weight: 800;
  font-family: 'Roboto';
`
export const Description = styled.p`
  font-size: 25px;
  font-weight: 700;
  font-family: 'Roboto';
`
export const UnorderedList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 25px;
`
export const Label = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 13px;
`
export const Input = styled.input`
  font-size: 20px;
  font-weight: 600;
  font-family: 'Roboto';
  width: 100px;
  height: 50px;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  border: none;
  outline: none;
  font-weight: 800;
  font-size: 20px;
  font-family: 'Roboto';
  padding: 10px;
  cursor: pointer;
`
