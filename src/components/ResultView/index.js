import {
  ResultContainer,
  ResultImageView,
  ResultH1,
  Img,
  ResultBtn,
  ResultText,
} from './stylesComponents'

const ResultView = props => {
  const {yourChoice, opponentChoice, restartGame, resultMessage} = props

  const onRestart = () => {
    restartGame()
  }

  return (
    <ResultContainer>
      <ResultImageView>
        <ResultContainer>
          <ResultH1>YOU</ResultH1>
          <Img src={yourChoice.imageUrl} alt="your choice" />
        </ResultContainer>
        <ResultContainer>
          <ResultH1>OPPONENT</ResultH1>
          <Img src={opponentChoice.imageUrl} alt="opponent choice" />
        </ResultContainer>
      </ResultImageView>

      <ResultText>{resultMessage}</ResultText>
      <ResultBtn type="button" onClick={onRestart}>
        PLAY AGAIN
      </ResultBtn>
    </ResultContainer>
  )
}

export default ResultView
