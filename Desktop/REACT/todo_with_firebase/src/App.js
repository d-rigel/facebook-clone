import { Button, FormHelperText, Input, InputLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import React, { useState, useEffect } from 'react';
import db from "./firebase"
import firebase from "firebase"
import './App.css';
import Todo from './Todo';
 

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")
  
  //as the page loads, we need to listen to the database and fetch new todos as they add/removed
  useEffect(() => {
    db.collection("todos").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc =>({id: doc.id, todo: doc.data().todo})))
      console.log(db)
    })
  }, []);

  const addTodo = (e) => { 
    e.preventDefault()

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

   setTodos([...todos, input])
    setInput("")  
  }

  

  return (
    <div className="App">
      <h1 className="intro">Hello!!! have a spendid day.<span>👸</span></h1>
      <form>
      {/* <input type="text" value={input}  onChange={(e) => setInput(e.target.value)}  /> */}
      {/* <button type="submit" onClick={addTodo}></button> */}
      <FormControl>
        <InputLabel htmlFor="my-input">Write a todo list</InputLabel>
        <Input  type="text" value={input}  onChange={(e) => setInput(e.target.value)}  />
        <FormHelperText id="my-helper-text">always cool to put down your daily tasks</FormHelperText>
      </FormControl>
      <Button type="submit"
       disabled={!input} 
       value={input}
       onClick={addTodo}
       variant="contained"
       color="primary"
       >
       Add Item
      </Button> 
      </form>
     
       <ul>
        {todos.map(todo => <Todo todo={todo} key={todo.id} />)}
      </ul>
    </div>
  );
}

export default App;
