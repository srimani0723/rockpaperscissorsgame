import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import {Component} from 'react'

import Buttons from '../Buttons'

import {
  MainContainer,
  ScoreContainer,
  ScoreHeading,
  ScoreSection,
  ScoreTitle,
  Score,
  RulesBtn,
  PopupContainer,
  ClosePopupBtn,
  RulesImage,
  RulesContainer,
  BtnContainer,
} from './styledComponents'

class Game extends Component {
  state = {
    gameScore: 0,
    resultView: false,
    yourChoice: {},
    opponentChoice: {},
    resultMessage: '',
  }

  renderScoreSection = () => {
    const {gameScore} = this.state

    return (
      <ScoreSection>
        <ScoreHeading>ROCK PAPER SCISSORS</ScoreHeading>
        <ScoreContainer>
          <ScoreTitle>Score</ScoreTitle>
          <Score>{gameScore}</Score>
        </ScoreContainer>
      </ScoreSection>
    )
  }

  toggleResultView = () => {
    this.setState(prevState => ({
      resultView: !prevState.resultView,
    }))
  }

  renderMainFinalResult = () => {
    const {gameScore, yourChoice, opponentChoice, resultMessage} = this.state
    console.log(gameScore, yourChoice, opponentChoice, resultMessage)
  }

  setYourChoice = yourChoiceObj => {
    const {choicesList} = this.props
    const opponentChoice = choicesList[Math.floor(Math.random() * 3)]

    if (yourChoiceObj.id === 'PAPER' && opponentChoice.id === 'ROCK') {
      this.setState(prevState => ({
        gameScore: prevState.gameScore + 1,
        resultView: false,
        yourChoice: yourChoiceObj,
        opponentChoice,
        resultMessage: 'YOU WON',
      }))
    } else if (
      yourChoiceObj.id === 'SCISSORS' &&
      opponentChoice.id === 'ROCK'
    ) {
      this.setState(prevState => ({
        gameScore: prevState.gameScore - 1,
        resultView: false,
        yourChoice: yourChoiceObj,
        opponentChoice,
        resultMessage: 'YOU LOSE',
      }))
    } else if (yourChoiceObj.id === 'ROCK' && opponentChoice.id === 'PAPER') {
      this.setState(prevState => ({
        gameScore: prevState.gameScore - 1,
        resultView: false,
        yourChoice: yourChoiceObj,
        opponentChoice,
        resultMessage: 'YOU LOSE',
      }))
    } else if (
      yourChoiceObj.id === 'SCISSORS' &&
      opponentChoice.id === 'PAPER'
    ) {
      this.setState(prevState => ({
        gameScore: prevState.gameScore + 1,
        resultView: false,
        yourChoice: yourChoiceObj,
        opponentChoice,
        resultMessage: 'YOU WON',
      }))
    } else if (
      yourChoiceObj.id === 'ROCK' &&
      opponentChoice.id === 'SCISSORS'
    ) {
      this.setState(prevState => ({
        gameScore: prevState.gameScore + 1,
        resultView: false,
        yourChoice: yourChoiceObj,
        opponentChoice,
        resultMessage: 'YOU WON',
      }))
    } else if (
      yourChoiceObj.id === 'PAPER' &&
      opponentChoice.id === 'SCISSORS'
    ) {
      this.setState(prevState => ({
        gameScore: prevState.gameScore - 1,
        resultView: false,
        yourChoice: yourChoiceObj,
        opponentChoice,
        resultMessage: 'YOU LOSE',
      }))
    } else if (yourChoiceObj.id === opponentChoice.id) {
      this.setState({
        resultView: false,
        yourChoice: yourChoiceObj,
        opponentChoice,
        resultMessage: 'IT IS DRAW',
      })
    }
  }

  renderButtons = () => {
    const {choicesList} = this.props

    return (
      <BtnContainer>
        {choicesList.map(item => (
          <Buttons obj={item} key={item.id} setChoice={this.setYourChoice} />
        ))}
      </BtnContainer>
    )
  }

  popupRender = () => (
    <PopupContainer>
      <div className="popup-container popup">
        <Popup
          modal
          trigger={
            <RulesBtn type="button" className="trigger-button">
              Rules
            </RulesBtn>
          }
        >
          {close => (
            <RulesContainer>
              <ClosePopupBtn
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <RiCloseLine aria-label="close" />
              </ClosePopupBtn>

              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </RulesContainer>
          )}
        </Popup>
      </div>
    </PopupContainer>
  )

  render() {
    const {resultView} = this.state
    const {gameScore, yourChoice, opponentChoice, resultMessage} = this.state
    console.log(yourChoice.id, opponentChoice.id, resultMessage)

    return (
      <MainContainer>
        {this.renderScoreSection()}
        {resultView ? this.renderMainFinalResult() : this.renderButtons()}
        {this.popupRender()}
      </MainContainer>
    )
  }
}

export default Game
