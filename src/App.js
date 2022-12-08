import './App.css';
// import Todo from './components/todo';
// import Counter from './components/counter';
import EmpMgmt from './components/EmpMgmt';

function App() {
  // const todos = [
  //   { id: 1, title: 'Wake up early', completed: true },
  //   { id: 2, title: 'Do excercise', completed: false },
  // ]
  // return (
  //   <div className="App" style={{ marginTop: 20 }}>
  //     {
  //       todos.map(todo => <Todo key={todo.id} todo={todo} />)
  //     }
  //   </div>
  // );

  // return (
  //   <div>
  //     <Counter />
  //   </div>
  // )

  return (
    <div>
      <EmpMgmt />
    </div>
  )
}

export default App;
