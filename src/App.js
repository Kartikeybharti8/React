import './App.css';
import Header from './my-components/Header';
import Footer from './my-components/Footer';
import { Todos } from './my-components/Todos';
import { AddTodo } from './my-components/AddTodo';
import { useState, useEffect } from "react";
import { About } from './my-components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  let initTodos;
  if (localStorage.getItem("items") === null) {
    initTodos = [];

  } else {
    initTodos = JSON.parse(localStorage.getItem("items"))
  }


  const onDelete = (todo) => {
    setItems(items.filter((val) => { return val !== todo }))
    localStorage.setItem("items", JSON.stringify(items));
  }

  const addNewTodo = (title, dec) => {
    let sno;
    if (items.length === 0) {
      sno = 0
    } else {
      sno = items[items.length - 1].sno + 1;
      console.log(items[items.length - 1].sno)
    }
    const newTodo = {
      sno: sno,
      title: title,
      dec: dec,
    }

    setItems([...items, newTodo]);

  }

  const [items, setItems] = useState(initTodos);
  //makes imidiate upate to local storage as soon as there is a change in items
  // dont have to explicity call these hooks the work according to their job.
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items])


  //main part that gets rendered.
  return (
    <>
      <Router>
        <Header title="Todays_Todos" searchBar={false} />

        <Routes>
          <Route  path="/" element= {
              <>
                <AddTodo addTodo={addNewTodo} />
                <Todos todos={items} onDelete={onDelete} />
              </>
            }/>
          <Route  path="/about" element={<About/>}/>
        </Routes>

        <Footer />
      </Router>

    </>
  );
}

export default App;
