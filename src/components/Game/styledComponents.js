import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: #223a5f;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 5%;
`

export const ScoreSection = styled.div`
  border: 2px solid #ffffff;
  width: 90%;
  max-width: 1000px;
  padding: 10px;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`

export const ScoreHeading = styled.h1`
  color: #ffffff;
  font-size: larger;
  font-weight: 500;
  font-family: 'Bree Serif';
  width: 100px;
  margin: 0px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100px;
`
export const ScoreTitle = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-weight: 600;
  margin: 0px;
`

export const Score = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 500;
  margin: 0px;
`
export const BtnContainer = styled.div`
  display: flex;
`

export const BtnMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Btn = styled.button`
  border: 0px;

  background-color: transparent;
`

export const Img = styled.img`
  width: 120px;
`
