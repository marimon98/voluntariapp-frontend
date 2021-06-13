import React, {useState, Fragment, useRef} from "react";
import ReactDom from "react-dom";
import  {v4 as uuidv4} from 'uuid';
import './Esqueleto.css';
import { App } from './App';
import imgUser from './components/img/userX.PNG';
import {Link, Route, BrowserRouter as Router} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHands, faHandsHelping, faUser,faTrophy, faCertificate, faArrowLeft,faSearch } from '@fortawesome/free-solid-svg-icons';
import Navigation from "./components/Navigation";

export function Esqueleto() {

    const [inscritos, setInscritos] = useState([]);


    return (
        <Router>


            <head>

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

            <body id="page-top">

                {/*<!-- Page Wrapper -->*/}
                <div id="wrapper">

                    {/*<!-- Sidebar -->*/}
                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                        {/*<!-- Sidebar - Brand -->*/}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
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
                                <span>Experiències</span>
                            </Link>
                        </li>

                        {/*<!-- Nav Item - Ranking -->*/}
                        <li className="nav-item">
                            <Link className="nav-link collapsed" to="/ranking" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <FontAwesomeIcon icon={faTrophy} />  &nbsp; &nbsp;
                                <span>Rànking</span>
                            </Link>
                        </li>
                        { /*<!-- Divider -->*/}
                        <hr className="sidebar-divider d-none d-md-block"/>
                        {/*<!-- Nav Item - Sortir -->*/}
                        <li className="nav-item">
                            <Link className="nav-link collapsed" to="/login" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <FontAwesomeIcon icon={faArrowLeft} />  &nbsp; &nbsp;
                                <span>Sortir</span>
                            </Link>
                        </li>
                    </ul>
                    {/*<!-- End of Sidebar -->*/}

                    {/*<!-- Content Wrapper -->*/}
                    <div id="content-wrapper" className="d-flex flex-column">

                        {/*<!-- Main Content -->*/}
                        <div id="content">

                            {/*<!-- Topbar -->*/}
                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                                {/*<!-- Sidebar Toggle (Topbar) -->*/}
                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                    <i className="fa fa-bars"></i>
                                </button>
                                {/*MODIFICAR PARA HACERLO DINAMICAMENTE*/}
                                <span style = {{ padding:  "0% 0% 0% 50%", fontSize: 22, color: "black"}}> Títol </span>

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
                {/*<!-- End of Page Wrapper -->*/}

                {/*<!-- Scroll to Top Button-->*/}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>

                {/*<!-- Logout Modal-->*/}
                <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<!-- Bootstrap core JavaScript-->*/}
                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                {/*<!-- Core plugin JavaScript-->*/}
                <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

                {/*<!-- Custom scripts for all pages-->*/}
                <script src="/sb-admin-2.min.js"></script>

            </body>




        </Router>

    );
}