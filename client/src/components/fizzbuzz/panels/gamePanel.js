import React from 'react'
import { connect } from 'react-redux'
import { FizzBuzzButton, FizzButton, BuzzButton, PassButton } from '../buttons'
import { CurrentNumberDisplay, ScoreDisplay} from '../displays'
import { buttonContainerStyle, displayContainerStyle, gamePanelStyle } from '../../../styles'

const GamePanel = (props) => (props.gameReady && !props.isEnd) ?
  <div style={gamePanelStyle}>
    <div style={displayContainerStyle}>
      <ScoreDisplay />
     </div>
     <div style={displayContainerStyle}>
      <CurrentNumberDisplay />
    </div>
    <div style={buttonContainerStyle}>
      <FizzButton />
      <BuzzButton />
      <FizzBuzzButton />
      <PassButton />
    </div>
  </div>
  :
  null
  

const mapStateToProps = ({ fizzBuzz }) => ({
  gameReady: fizzBuzz.gameReady,
  isEnd: fizzBuzz.isEnd
})

export default connect(
  mapStateToProps
)(GamePanel)
