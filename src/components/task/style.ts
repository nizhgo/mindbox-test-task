import styled from "styled-components";

const TaskCard = styled.div`
  background: #FCFCFC;
  border: 1px solid #000000;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`


const TaskContent = styled.div`
  align-items: center;
  justify-items: center;
  margin: 6px;
  display: grid;
  grid-template-columns: 32px 8fr 56px;
  grid-gap: 1em;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  min-height: 32px;
  color: #000000;

  p {
    justify-self: start;
  }
`

const IconImg = styled.img`
  height: 24px;
  width: 24px;
`

const Checkbox = styled.input`
  all: revert;
  height: 16px;
  width: 16px;
`

export {
	TaskCard,
	TaskContent,
	Checkbox,
	IconImg
}