
import {useState} from 'react'
function TodoForm({addTask}) {
	const [inputValue, setInputValue] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		addTask(inputValue)
		setInputValue('')
        
	}

	const hadleChangeInput = (e) => {
		setInputValue(e.target.value)
	}
	return (
		<div>
			<form 
				action=""
				onSubmit={handleSubmit}
				>
				<input 	
					value={inputValue}
					onChange={hadleChangeInput}
					type="text" />
					<button>Add Task</button>
			</form>
		</div>
	)
}

export default TodoForm