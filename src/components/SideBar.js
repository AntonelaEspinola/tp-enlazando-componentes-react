import React from 'react';
import image from '../assets/images/logo-DH.png';
import {Link, Routes, Route}from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import ErrorPage from './error';
function SideBar(){
    return(
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a>
                </li>

                {/*<!-- Nav Item - Movies -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/movies">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Movies</span></Link>
                </li>
                  {/*<!-- Nav Item - Genres -->*/}
                  <li className="nav-item">
                    <Link className="nav-link" to="/genres">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Genres</span></Link>
                </li>
                  {/*<!-- Nav Item - TheLastMovie -->*/}
                  <li className="nav-item">
                    <Link className="nav-link" to="/TheLastMovie">
                        <i className="fas fa-fw fa-table"></i>
                        <span>The Last Movie</span></Link>
                </li>
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
              
            <Routes>
             <Route path="/" exact="true" element={<ContentWrapper/>}/>
             <Route path="/genres" exact="true" element={<GenresInDb/>}/>
             <Route path="/TheLastMovie" exact="true" element={<LastMovieInDb/>}/>
             <Route path="/movies" exact="true" element={<ContentRowMovies/>}/>
             <Route  element={<ErrorPage/>}/>
            </Routes>
           
          
        </>
    )
}
export default SideBar;