import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {MainPageLazy} from "./components/pages/MainPage/MainPage.Lazy";
import {AboutPageLazy} from "./components/pages/AboutPage/AboutPage.Lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

export const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>Home</Link>
            <Link to={'/aboutPage'}>About</Link>
            <button onClick={() => toggleTheme()}>TOGGLE</button>
            <Suspense fallback={<div> loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                    <Route path={'/aboutPage'} element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

