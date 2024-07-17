import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: #223a5f;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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
  margin-right: 10px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100px;
  margin-left: 10px;
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

export const RulesBtn = styled.button`
  color: #223a5f;
  background-color: white;
  font-size: large;
  font-weight: 500;
  font-family: 'Bree Serif';
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
`
export const PopupContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
`

export const ClosePopupBtn = styled.button`
  padding: 10px;
  border: 0px;
`

export const RulesImage = styled.img`
  width: 100%;
  padding: 10%;
  padding-bottom: 10px;
  padding-top: 0px;
`

export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const BtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 450px;
  justify-content: center;

  @media screen and (max-width: 576px) {
    width: 360px;
  }
`
