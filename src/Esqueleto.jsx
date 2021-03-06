import React, {useState, Fragment, useRef} from "react";
import ReactDom from "react-dom";
import  {v4 as uuidv4} from 'uuid';
import './Esqueleto.css';
import voluntariAppFoto from './components/img/voluntariapp.PNG';
import { App } from './App';
import imgUser from './components/img/userX.PNG';
import {Link, Route, BrowserRouter as Router} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHands, faHandsHelping, faUser,faTrophy, faCertificate, faArrowLeft,faSearch, faQrcode } from '@fortawesome/free-solid-svg-icons';
import Navigation from "./components/Navigation";

export function Esqueleto() {

    const [inscritos, setInscritos] = useState([]);


    return (
        <Router>


            <head >

                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="description" content=""/>
                <meta name="author" content=""/>

                <title>VoluntariApp</title>

                {/*<!-- Custom fonts for this template-->*/}

                <link
                    href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
                    rel="stylesheet"/>

            </head>

            <body id="page-top" >

                {/*<!-- Page Wrapper -->*/}
                <div id="wrapper" >

                    {/*<!-- Sidebar -->*/}
                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" style ={headStyle}>

                        {/*<!-- Sidebar - Brand -->*/}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center">
                            <div className="sidebar-brand-icon rotate-n-15">
                                <i className="fas fa-laugh-wink">V</i>
                            </div>
                            <div className="sidebar-brand-text mx-3">VoluntariApp</div>
                        </a>

                        {/*<!-- Divider -->*/}
                        <hr className="sidebar-divider my-0"/>

                        {/*<!-- Nav Item - Inici -->*/}
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <FontAwesomeIcon icon={faHome} />  &nbsp; &nbsp;
                                <span>Inici</span></Link>
                        </li>

                        {/*<!-- Divider -->*/}
                        <hr className="sidebar-divider"/>

                        {/*<!-- Heading -->*/}
                        <div className="sidebar-heading">
                            Voluntariats
                        </div>

                        {/*<!-- Nav Item - General Collapse Menu -->*/}
                        <li className="nav-item">
                            <Link className="nav-link collapsed" to="/general" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <FontAwesomeIcon icon={faHands} />  &nbsp; &nbsp;
                                <span>General</span>
                            </Link>
                        </li>

                        {/*<!-- Nav Item - Inscrits Collapse Menu -->*/}
                        <li className="nav-item">
                            <Link className="nav-link collapsed" to="/enrolled" data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                                <FontAwesomeIcon icon={faHandsHelping} />  &nbsp; &nbsp;
                                <span>Inscrits</span>
                            </Link>
                        </li>

                        {/*<!-- Divider -->*/}
                        <hr className="sidebar-divider"/>

                        {/*<!-- Personal -->*/}
                        <div className="sidebar-heading">
                            Personal
                        </div>


                        {/*<!-- Nav Item - Perfil -->*/}
                        <li className="nav-item">
                            <Link className="nav-link collapsed" to="/profile" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <FontAwesomeIcon icon={faUser} />  &nbsp; &nbsp;
                                <span>Perfil</span>
                            </Link>
                        </li>
                        {/*<!-- Nav Item - Experiencies -->*/}
                        <li className="nav-item">
                            <Link className="nav-link collapsed" to="/experiencies" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <FontAwesomeIcon icon={faCertificate} />  &nbsp; &nbsp;
                                <span>Experi??ncies</span>
                            </Link>
                        </li>

                        {/*<!-- Nav Item - Ranking -->*/}
                        <li className="nav-item">
                            <Link className="nav-link collapsed" to="/ranking" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <FontAwesomeIcon icon={faTrophy} />  &nbsp; &nbsp;
                                <span>R??nking</span>
                            </Link>
                        </li>

                        { /*<!-- Divider -->*/}
                        <hr className="sidebar-divider d-none d-md-block"/>
                        {/*<!-- Personal -->*/}
                        <div className="sidebar-heading">
                            Participaci??
                        </div>

                        {/*<!-- Nav Item - QrCode -->*/}
                        <li className="nav-item">
                              <Link className="nav-link collapsed" to="/QrCode" data-toggle="collapse" data-target="#collapseUtilities"
                                    aria-expanded="true" aria-controls="collapseUtilities">
                                    <FontAwesomeIcon icon={faQrcode} />  &nbsp; &nbsp;
                                    <span>Generar codi QR</span>
                              </Link>
                        </li>

                        { /*<!-- Divider -->*/}
                        <hr className="sidebar-divider d-none d-md-block"/>
                        {/*<!-- Nav Item - Sortir -->*/}
                        <li className="nav-item">
                            <div className="nav-link collapsed" to="/login" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <FontAwesomeIcon icon={faArrowLeft} />  &nbsp; &nbsp;
                                <span>Sortir</span>
                            </div>
                        </li>
                    </ul>
                    {/*<!-- End of Sidebar -->*/}

                    {/*<!-- Content Wrapper -->*/}
                    <div id="content-wrapper" className="d-flex flex-column" style={backGround}>

                        {/*<!-- Main Content -->*/}
                        <div id="content">

                            {/*<!-- Topbar -->*/}
                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                                {/*<!-- Sidebar Toggle (Topbar) -->*/}
                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                    <i className="fa fa-bars"></i>
                                </button>
                                {/*MODIFICAR PARA HACERLO DINAMICAMENTE*/}
                                {/*<span style = {{ padding:  "0% 0% 0% 50%", fontSize: 22, color: "black"}}> Voluntari </span>*/}
                                <span style = {{ padding:  "0% 0% 0% 50%"}}><img src={voluntariAppFoto} style= {{width: "120px", height: "60px"}}></img> </span>

                                {/*<!-- Topbar Navbar -->*/}
                                <ul className="navbar-nav ml-auto">


                                    <div className="topbar-divider d-none d-sm-block"></div>

                                    {/*<!-- Nav Item - User Information -->*/}
                                    <li className="nav-item dropdown no-arrow">
                                        <a className="nav-link dropdown-toggle" href="/profile" id="userDropdown" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            {/*MODIFICAR PARA HACERLO DINAMICAMENTE*/}
                                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Usuario Invitado 1</span>
                                            <img className="img-profile rounded-circle"
                                                src={imgUser} />
                                        </a>
                                        {/*<!-- Dropdown - User Information -->*/}
                                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                            aria-labelledby="userDropdown">
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Profile
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Settings
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Activity Log
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                                Logout
                                            </a>
                                        </div>
                                    </li>

                                </ul>

                            </nav>
                            {/*<!-- End of Topbar -->*/}

                            {/*<!-- Begin Page Content -->*/}
                            <div className="container-fluid">

                                {/*<!-- Page Heading -->*/}
                                <h1 className="h3 mb-4 text-gray-800">
                                    <Navigation />
                                </h1>

                            </div>
                            {/*<!-- /.container-fluid -->*/}

                        </div>
                        {/*<!-- End of Main Content -->*/}

                        {/*<!-- Footer -->*/}
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; VoluntariApp 2021</span>
                                </div>
                            </div>
                        </footer>
                        {/*<!-- End of Footer -->*/}

                    </div>
                    {/*<!-- End of Content Wrapper -->*/}

                </div>
            </body>
        </Router>

    );
}
const headStyle = {
   /* width: "130px",
   position: "fixed",
   zIndex: 1*/
};const backGround = {
    backgroundColor: "#fefefefe"
};