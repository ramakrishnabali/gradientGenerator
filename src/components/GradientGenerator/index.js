import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  MainHeading,
  Description,
  UnorderedList,
  InputContainer,
  ColorContainer,
  Label,
  Input,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientValue: gradientDirectionsList[0].value,
    input1: '#8ae323',
    input2: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323,#014f7b`,
  }

  changeGradientDirection = value => {
    this.setState({activeGradientValue: value})
  }

  getInput1 = event => {
    this.setState({input1: event.target.value})
  }

  getInput2 = event => {
    this.setState({input2: event.target.value})
  }

  generateGradient = () => {
    const {input1, input2, activeGradientValue} = this.state

    this.setState({
      gradientValue: `to ${activeGradientValue} , ${input1},${input2}`,
    })
  }

  render() {
    const {gradientValue, input1, input2, activeGradientValue} = this.state

    return (
      <AppContainer data-testid="gradientGenerator" gradient={gradientValue}>
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <Description>Choose Direction</Description>
        <UnorderedList>
          {gradientDirectionsList.map(eachGradient => (
            <GradientDirectionItem
              key={eachGradient.directionId}
              gradient={eachGradient}
              changeDirection={this.changeGradientDirection}
              isActive={eachGradient.value === activeGradientValue}
            />
          ))}
        </UnorderedList>
        <Description>Pick the Colors</Description>
        <InputContainer>
          <ColorContainer>
            <Label>{input1}</Label>
            <Input value={input1} onChange={this.getInput1} type="color" />
          </ColorContainer>

          <ColorContainer>
            <Label>{input2}</Label>
            <Input value={input2} onChange={this.getInput2} type="color" />
          </ColorContainer>
        </InputContainer>
        <GenerateButton onClick={this.generateGradient} type="button">
          Generate
        </GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator
