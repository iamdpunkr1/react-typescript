import React from 'react';
import './App.css';
import Basic from './components/props/Basic';
import Advance from './components/props/Advance';
import Events from './components/props/Events';
import Child from './components/props/Child';
import Styles from './components/props/Styles';
import { Change } from './components/props/Event.types';
import Counter from './states/Counter';
import List from './states/List';
import Restrict from './states/Restrict';
import Template from './components/Template';
import McqForm from './components/McqForm';
import Question from './components/Question';

const obj = [
  {
    name: 'John',
    age: 30
  },
  {
    name: 'Jane',
    age: 20
  }
]

function App() {

  const handleChange = (e: Change) =>{
    console.log(e.target.value)
  }

  const handleClick = () => console.log("clicked")

  return (
    <div className="App">
      {/* <Basic values="Props Typescript"/>
      <Advance values={obj}/>
      <Events value="" handleChange={handleChange}
              handleClick={handleClick}/>
      <Child>
        <h1>Children Component</h1>
      </Child>
      <Styles style={{backgroundColor:"#3498db",
                      color:"#333333",
                      padding:"20px",
                      borderRadius:"10px"}}/>
      <Counter/>
      <List list={[1,2,3,4]}/>
      <List list={["1","2","3","4"]}/>
      <Restrict value={10} isPositive/>
      <Template position="center"/> */}
      <McqForm/>
      <Question/>
     </div>
     )
     }

  export default App;

