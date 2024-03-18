
import { useRecoilValue } from 'recoil';
import './App.css';
import { todoListState } from './TodoAtom';
import TodoItemCreator from './coponents/TodoItemCreator';
import TodoItem from './coponents/TodoItem';

function App() {
  const todoList = useRecoilValue(todoListState)
  console.log(todoList)
  return (
    <div className="App">
      <TodoItemCreator></TodoItemCreator>
      {todoList.map((todoItem)=>(
        <TodoItem key={todoItem.id} item={todoItem}/>
      ))}
    </div>
  );
}

export default App;
