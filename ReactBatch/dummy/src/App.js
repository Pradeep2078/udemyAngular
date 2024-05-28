import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [name, setName] = useState('Pradeep');

  // Variation 1 -> Every Render
  // useEffect(() => {
  //   console.log("Ui Rendering Done")
  // })

  // Variation 2 --> First Render
  // useEffect( () => {
  //   console.log("UI RENDERING MODE");
  // },[])

  // Variation 3 -->on First Render + whenever dependency changes
  // useEffect( () => {
  //   console.log("CHnage Observed");
  // },[name])

  // Variation 4 -->on handle unmounting of a component
  useEffect(() => {
    // add event Listener
    console.log("listener added");

    return () => {
      console.log("Listener Removed");
    }
  }, [])

  function changeHandler(event) {
    console.log(text)
    setText(event.target.value)
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
    </div>
  );
}

export default App;
