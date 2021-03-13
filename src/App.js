import React,{Component} from 'react';
import Header from './components/HeaderFn';
import Headline from './components/HeadlineCls';
import './app.scss';

const tempArr=[{
  fName:"Sai",
  lName:"Sasubilli",
  email:"sai.sasubilli@gmail.com",
  age:22,
  onlineStatus:true
}]

function App() {
  return (
    <div className="App">
     <Header/>
     <section className="main">
    <Headline header="Posts" desc="Click the button to render Posts" tempArr={tempArr}/>
     </section>
    </div>
  );
}

export default App;
