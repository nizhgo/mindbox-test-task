import React, {useContext} from "react";
import {TodosContext} from "../../TodosProvider";
import {
	ListItem,
	StatusLabel,
	StatusList
} from './style'

const TaskStatusSelector = () => {
	const {selectedFilter, setSelectedFilter} = useContext(TodosContext);
	return (
		<StatusList>
			<ListItem isSelected={'all' === selectedFilter}
			          onClick={() => setSelectedFilter('all')}><StatusLabel>Все</StatusLabel></ListItem>
			<ListItem isSelected={'active' === selectedFilter}
			          onClick={() => setSelectedFilter('active')}><StatusLabel>Актвные</StatusLabel></ListItem>
			<ListItem isSelected={'complete' === selectedFilter}
			          onClick={() => setSelectedFilter('complete')}><StatusLabel>Завершенные</StatusLabel></ListItem>
		</StatusList>
	)
}

export default TaskStatusSelector;

