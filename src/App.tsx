import React, { FC, ChangeEvent, useState } from "react";
import "./App.scss";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [taskName, setTaskName] = useState<string>("");
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
     //I guess this check is not required as this is not a reutilizing function
    if (event.target.name === "taskName") {
      setTaskName(event.target.value);
    }
  };

  const addTask = (): void => {

    setTodo([...todo, taskName]);
    // ... is rest operator which let newTask values to be added in todo array
    setTaskName("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    let todoo = todo.filter((taskName) => taskName != taskNameToDelete);
    setTodo(todoo);
    
  };

  return (
    <div className="App">
      <div className="heading">
        <h1>Todo App</h1>
      </div>
      <div className="header">
     
        <div className="inputContainer">
          
          <input
            type="text"
            placeholder="Task..."
            name="taskName"
            value={taskName}
            onChange={handleChange}
            required
          />
         
        </div>
        <button onClick={addTask}>Add todo</button>
        
      </div>
     
      <div className="todoList">
        {todo.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
