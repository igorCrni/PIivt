import React from 'react';
import './Applicaiton.sass';
import {Container} from 'react-bootstrap';
import UserLoginPage from '../User/UserLoginPage/UserLoginPage';
import { Route, Routes } from 'react-router-dom';
import Category from '../Category/Category';
import UserProfile from '../User/Profile/UserProfile';
import CategoryList from '../Category/CategoryList';
import UserRegisterPage from '../User/UserRegisterPage/UserRegisterPage';
import { Provider } from 'react-redux';
import AppStore from '../../stores/AppStore';
import Menu from '../Menu/Menu';
import UserAdAdd from '../User/Profile/UserAdAdd';
import UserAdAddForCategory from '../User/Profile/UserAdAddForCategory';
import UserAdAddForBrand from '../User/Profile/UserAdAddForBrand';
import UserAdAddForModel from '../User/Profile/UserAdAddForModel';
import UserEditAd from '../User/Profile/UserEditAd';

function Applicaiton() {
  return (
    <Provider store={AppStore}>
      <Container className='mt-4'>
        <Menu />
          <Routes>

            <Route path='/' element={<div></div>} />
            <Route path='/auth/user/login' element={ <UserLoginPage /> } />
            <Route path='/auth/user/register' element={<UserRegisterPage />}/>
            <Route path='/categories' element={ <CategoryList/>} />
            <Route path='/category/:id' element={<Category />} />
            
            <Route path="/user/:id" element={ <UserProfile /> } />
            <Route path="/user/:id/ad/edit/:aid" element={ <UserEditAd /> } />
            <Route path="/user/:id/ad/add" element={ <UserAdAdd /> } />
            <Route path="/user/:uid/category/:cid/ad/add" element={ <UserAdAddForCategory /> } />
            <Route path="/user/:uid/category/:cid/brand/:bid/ad/add" element={ <UserAdAddForBrand /> } />
            <Route path="/user/:uid/category/:cid/brand/:bid/model/:mid/ad/add" element={ <UserAdAddForModel /> } />

          </Routes>
      </Container>
    </Provider>
  );
}

export default Applicaiton;
