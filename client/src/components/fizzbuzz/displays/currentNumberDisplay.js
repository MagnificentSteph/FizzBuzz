import React from 'react'
import { connect } from 'react-redux'
import { currentNumberDisplayStyle } from '../../../styles'

const CurrentNumberDisplay = (props) =>
  <div
    style={currentNumberDisplayStyle.container}>
    <div
      style={currentNumberDisplayStyle.number}>
      <div
        style={currentNumberDisplayStyle.title}>
        Is the Number Fizz, Buzz, or FizzBuzz? If none, click Pass.
      </div>
      {
        props.currentNumber
      }
      </div>
  </div>

const mapStateToProps = ({ fizzBuzz }) => ({
  currentNumber: fizzBuzz.currentNumber
})

export default connect(
  mapStateToProps
)(CurrentNumberDisplay)
