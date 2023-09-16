import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './index.scss'
import {MainPageLazy} from "./components/pages/MainPage/MainPage.Lazy";
import {AboutPageLazy} from "./components/pages/AboutPage/AboutPage.Lazy";

export const App = () => {
    return (
        <div className={'app'}>
            <Link to={'/'}>Home</Link>
            <Link to={'/aboutPage'}>About</Link>
            <Suspense fallback={<div> loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                    <Route path={'/aboutPage'} element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

