import React from 'react';
import './Applicaiton.sass';
import {Container} from 'react-bootstrap';
import LoginPage from '../User/LoginPage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from '../Menu/Menu';
import Category from '../Category/Category';
import CategoryList from '../Category/CategoryList';

function Applicaiton() {
  return (
    <Container className='mt-4'>
      <Menu />
        <Routes>

          <Route path='/' element={<div></div>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/auth/user/login' element={<LoginPage />}/>
          <Route path='/categories' element={ <CategoryList/>} />
          <Route path='/category/:id' element={<Category />} />

        </Routes>
    </Container>
  );
}

export default Applicaiton;
