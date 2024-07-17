import {
  ResultContainer,
  ResultImageView,
  ResultH1,
  Img,
  ResultBtn,
  ResultText,
} from './stylesComponents'

const ResultView = props => {
  const {} = props

  return (
    <ResultContainer>
      <ResultImageView>
        <ResultContainer>
          <ResultH1>YOU</ResultH1>
          <Img src="hi" alt="your choice" />
        </ResultContainer>
        <ResultContainer>
          <ResultH1>OPPONENT</ResultH1>
          <Img src="hi" alt="opponent choice" />
        </ResultContainer>
      </ResultImageView>

      <ResultText>Result</ResultText>
      <ResultBtn type="button">PLAY AGAIN</ResultBtn>
    </ResultContainer>
  )
}

export default ResultView
