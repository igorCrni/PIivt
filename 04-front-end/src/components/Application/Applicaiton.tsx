import React from 'react';
import './Applicaiton.sass';
import {Container} from 'react-bootstrap';
import UserLoginPage from '../User/UserLoginPage/UserLoginPage';
import { Route, Routes } from 'react-router-dom';
import Category from '../Category/Category';
import UserProfile from '../User/Profile/UserProfile';
import UserRegisterPage from '../User/UserRegisterPage/UserRegisterPage';
import { Provider } from 'react-redux';
import AppStore from '../../stores/AppStore';
import Menu from '../Menu/Menu';
import UserAdAdd from '../User/Profile/UserAdAdd';
import UserAdAddForCategory from '../User/Profile/UserAdAddForCategory';
import UserAdAddForBrand from '../User/Profile/UserAdAddForBrand';
import UserAdAddForModel from '../User/Profile/UserAdAddForModel';
import UserEditAd from '../User/Profile/UserEditAd';
import Search from '../Category/Search';
import AdPreview from '../Ad/AdPreview';
import SearchBrand from '../Brand/SearchBrand';
import SearchModel from '../Model/SearchModel';

function Applicaiton() {
  return (
    <Provider store={AppStore}>
      <Container className='mt-4'>
        <Menu />
          <Routes>

            <Route path='/' element={<div></div>} />
            <Route path='/auth/user/login' element={ <UserLoginPage /> } />
            <Route path='/auth/user/register' element={<UserRegisterPage />}/>
            <Route path="/user/:id" element={ <UserProfile /> } />
            <Route path="/user/:id/ad/edit/:aid" element={ <UserEditAd /> } />
            <Route path="/user/:id/ad/add" element={ <UserAdAdd /> } />
            <Route path="/user/:uid/category/:cid/ad/add" element={ <UserAdAddForCategory /> } />
            <Route path="/user/:uid/category/:cid/brand/:bid/ad/add" element={ <UserAdAddForBrand /> } />
            <Route path="/user/:uid/category/:cid/brand/:bid/model/:mid/ad/add" element={ <UserAdAddForModel /> } />

            <Route path='/search' element={ <Search/>} />
            <Route path='/search/category/:cid' element={<Category />} />
            <Route path='/search/category/:cid/brand/:bid' element={<SearchBrand />} />
            <Route path='/search/category/:cid/brand/:bid/model/:mid' element={<SearchModel />} />
            <Route path='/ad/:id' element={<AdPreview/>}/>
            

          </Routes>
      </Container>
    </Provider>
  );
}

export default Applicaiton;
