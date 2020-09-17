import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import RouterURL from '../RouterURL/RouterURL';



class App extends Component {
  render() {
    return (
      
      <div>
         <section id="container">
  
          <Header></Header>
          <Sidebar></Sidebar>
          <Main></Main>
         
           <Footer></Footer>
        </section>
        <RouterURL></RouterURL>

      </div>
    );
  }
}

export default App;
