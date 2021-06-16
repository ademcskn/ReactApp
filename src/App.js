import './App.css';
import Navbar from "./components/Navbar";
// import User from './components/User';
import React, {Component} from 'react';
import AddUser from './components/AddUser';
import Users from './components/Users'; 

//https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
class App extends Component {
  constructor(props){
    super(props);
    console.log("constructor")
  }

    shouldComponentUpdate(){
      console.log("Should Component Update");
      return true;
      // return false;
    }
    componentDidMount() {
    //api istekleri 
    //setState çalıştığı için render tekrar çalışıyor.
    this.setState({
      a:"react"
    })
    console.log("componentDidMount");
  }

   componentDidUpdate=(prevProps,prevState)=>{
     console.log("Componenet Did Update");
   }
  
  //render ın içinde setState çağırılmaz.
render(){
  console.log("render");
  return (
    <div className="container">
        <Navbar title = "User App"/>
        <hr/>
            <AddUser/>
        <Users/>      
    </div>
  );
  }
}
export default App;
  