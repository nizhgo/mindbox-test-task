import styled, {css} from "styled-components";

const StatusLabel = styled.a`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #8A8A8A;
`

interface iListItem {
	isSelected: boolean;
}

const ListItem = styled.li<iListItem>`
    border-radius: 6px;
  padding: 3px 8px;
  transition: ease-in-out;
  animation: ease-in-out;
  animation-duration: 0.3s;
  cursor: pointer;
    ${props =>
	props.isSelected &&
	css`
      background: black;
            
            a
            {
              color: white;
            }
    `}
`

const StatusList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 0.2em;
`

export {
	StatusLabel,
	StatusList,
	ListItem
}