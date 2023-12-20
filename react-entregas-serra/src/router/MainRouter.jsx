import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from '../pages/Home';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent'
import ItemDetailContainer from '../pages/ItemDetailContainer'
import { Category } from '../pages/Category';

export const MainRouter = () => {

    return (
        <BrowserRouter>
            <NavBarComponent />
            <Routes>

                <Route path='/' element={<HomePage />}/>
                <Route path='/item/:productId' element={<ItemDetailContainer />}/>
                <Route path='/category/:categoryId' element={<Category />}/>
            </Routes>
        </BrowserRouter>

    )
}