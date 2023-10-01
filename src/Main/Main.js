import React from 'react';
import Header from '../pages/Header/Header';
import Categories from '../pages/Categories/Categories';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Categories></Categories>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;