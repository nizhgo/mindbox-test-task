import React, {useContext} from "react";
import styled, {css} from "styled-components";
import {TodosContext} from "../TodosProvider";

const TaskStatusSelector = () => {
    const {selectedFilter, setSelectedFilter} = useContext(TodosContext);
    return(
        <StatusList>
            <ListItem isSelected={'all' === selectedFilter} onClick={() => setSelectedFilter('all')}><StatusLabel>Все</StatusLabel></ListItem>
            <ListItem isSelected={'active' === selectedFilter} onClick={() => setSelectedFilter('active')}><StatusLabel>Актвные</StatusLabel></ListItem>
            <ListItem isSelected={'complete' === selectedFilter} onClick={() => setSelectedFilter('complete')}><StatusLabel>Завершенные</StatusLabel></ListItem>
        </StatusList>
    )
}
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
const  ListItem = styled.li<iListItem>`
    border-radius: 6px;
  padding: 3px 8px;
  transition: ease-in-out;
  animation: ease-in-out;
  animation-duration: 0.3s;
    ${props =>
          props.isSelected &&
          css`
      background: black;
            
            a
            {
              color: white;
            }
    `}
  \`
`

const StatusList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 0.2em;
`
export default TaskStatusSelector;

