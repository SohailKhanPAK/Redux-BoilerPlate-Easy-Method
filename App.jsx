import logo from './logo.svg';
import './App.css';
import React from 'react'
import { setData } from  './store/action'

import { connect } from 'react-redux'

class App extends React.Component{
  render(){
    return(


        <div>

              <h2>Main Component</h2>
    <h3>{this.props.userName}</h3>

  <button onClick ={()=> console.log( this.props) }>GET Data</button>
  <button onClick ={()=> this.props.setData("Hi") }>SET Data</button>

        </div>



    )
  }
}

const mapStatetoProps = (state) => ({
   
     userName : state.authData.userName,
     task2 : state.firebaseData.task2

     
})


const mapDispatchtoProps = (dispatch) =>({
    setData : (data)=> dispatch(setData(data))



})

export default connect(mapStatetoProps,mapDispatchtoProps)(App);
