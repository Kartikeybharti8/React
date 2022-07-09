import './App.css';
import Header from './my-components/Header';
import Footer from './my-components/Footer';
import itemTodo from './my-components/itemTodos';
import Todo from './my-components/Todo';





function App() {
  return (
    <>
     <Header/>
     <Todo/>
     <itemTodo/>
     <Footer/>
    </>
  );
}

export default App;
