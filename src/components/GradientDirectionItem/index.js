// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradient, changeDirection, isActive} = props

  const {value, displayText} = gradient

  const changeGradient = () => {
    changeDirection(value)
  }

  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        onClick={changeGradient}
        type="button"
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
