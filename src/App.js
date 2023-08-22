import React from 'react';
import Header from './components/header/header.component';
import HomePage from './pages/homePage/homepage.component';
import ProjectPage from './pages/projectPage/projectPage.component';
import ContactPage from './pages/contactPage/contactPage.component';
import Footer from './components/footer/footer.component';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='background'>
      <Header/>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/projects' Component={ProjectPage}/>
        <Route path='/contact' Component={ContactPage}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
