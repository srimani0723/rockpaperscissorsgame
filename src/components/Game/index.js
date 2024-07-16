import {Component} from 'react'
import {
  MainContainer,
  ScoreContainer,
  ScoreHeading,
  ScoreSection,
  ScoreTitle,
  Score,
  BtnContainer,
  BtnMainContainer,
  Btn,
  Img,
} from './styledComponents'

class Game extends Component {
  state = {
    gameScore: 0,
    resultView: false,
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

  renderButtons = () => {
    const {choicesList} = this.props

    return (
      <BtnMainContainer>
        <BtnContainer>
          <Btn type="button" data-testid="rockButton">
            <Img src={choicesList[0].imageUrl} alt={choicesList[0].id} />
          </Btn>
          <Btn type="button" data-testid="scissorsButton">
            <Img src={choicesList[1].imageUrl} alt={choicesList[1].id} />
          </Btn>
        </BtnContainer>
        <BtnContainer>
          <Btn type="button" data-testid="paperButton">
            <Img src={choicesList[2].imageUrl} alt={choicesList[2].id} />
          </Btn>
        </BtnContainer>
      </BtnMainContainer>
    )
  }

  render() {
    return (
      <MainContainer>
        {this.renderScoreSection()}
        {this.renderButtons()}
      </MainContainer>
    )
  }
}

export default Game
