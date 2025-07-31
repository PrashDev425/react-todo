import Header from "./components/Header/Header.jsx";
import TodoAdd from "./components/TodoAdd/TodoAdd.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";

const App = () => {
  return (
    <>
      <Header />
      <TodoAdd />
      <TodoList />
    </>
  );
};


export default App;