function Todo({itemTodo, itemDone, removeTask}){
    return (
      <div className="todo-container">
                <div>{itemTodo.number}.</div>
				<div 
					className={itemTodo.complete ? 'todo-strike' : 'todo-item'}
					onClick={() => itemDone(itemTodo.id)}
					>
					{itemTodo.task}
				</div>
				<div className="remove-btn"
					style={{'cursor': 'pointer'}}
					onClick={() => removeTask(itemTodo.id)}
					>
					X
				</div>
			</div>
    )
}

export default Todo