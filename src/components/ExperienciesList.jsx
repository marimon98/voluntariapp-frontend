import React, { useState} from 'react';
import Experiencies from "./Experiencies";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch } from '@fortawesome/free-solid-svg-icons';


function ExperienciesList() {

    const [experiencia, setExperiencies] = useState([
        {id:1, title: "Festival Cruïlla", body: "Pots bescanviar les teves xapes per una entrada al Cruïlla!", image: null, owner: "Damm", xapes: "400", data : "20/8/2021", ciutat: "Barcelona"},
        {id:2, title: " \"Carlos de Pablo i el món\" al MACBA ", body: "Carlos de Pablo ens mostrarà la seva forma de veure el món amb la seva exposició al MACBA.", image: null, owner: "MACBA", xapes: "200",  data :"10/10/2021", ciutat: "Barcelona"},
        {id:3, title: " Concert virtual Michael Jackson", body: "Reviu un espectacle del rei del pop de manera online i exclusiva.", image: null, owner: "Tickets Ramon", xapes: "400",  data :"1/23/2022" , ciutat: "Online"}

    ]);

    const [searchTearm, setSearchTerm] = useState("");
    const [searchTearmTitle, setSearchTearmTitle] = useState("");


    function handleClick(e) {
        e.preventDefault();
        experiencia.filter(val => {
            if(searchTearm == ""){
                return val;
            }else if(val.ciutat.toLowerCase().includes(searchTearm.toLowerCase())){
                return val;
            }
        }).map(volutariado =>{});
    }

    return (
    <div>
    Experiències bescanviables <br/><br/>
    <div style = {styleSearch}>
        {/*<!-- Topbar Search -->*/}
        <span className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" style = {fontSizeSearches} >Busca per nom: </span>&nbsp;
        <form
            className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Escriu el nom..."
                    aria-label="Search" aria-describedby="basic-addon2" onChange={(event) => {setSearchTearmTitle(event.target.value);} } />

            </div>
        </form><br/><br/>
        <span className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" style = {fontSizeSearches} >Busca per ciutat: </span>
                <form
                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Escriu la ciutat..."
                            aria-label="Search" aria-describedby="basic-addon2" onChange={(event) => {setSearchTerm(event.target.value);} } />

                    </div>
                </form>


</div>
        {/*<!-- Experiencies listadas -->*/}
        { /*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
        <ul style = {scroll}>
            {experiencia.filter(val => {
                                     if(searchTearm == ""){
                                        if(val.title.toLowerCase().includes(searchTearmTitle.toLowerCase()) || searchTearmTitle == "") return val;
                                     }else if(searchTearmTitle == ""){
                                        if(val.ciutat.toLowerCase().includes(searchTearm.toLowerCase())) return val;
                                     }else{
                                        if(val.title.toLowerCase().includes(searchTearmTitle.toLowerCase()) && val.ciutat.toLowerCase().includes(searchTearm.toLowerCase())) return val;
                                     }

                                 }).map((volutariado) => (
                <Experiencies key={volutariado.id} experiencia={volutariado} />
            ))}
        </ul>
    </div>
    );

}
const fontSizeSearches = {
   fontSize: 17
};
const scroll = {
    overflowY: "scroll",
    maxHeight: "59vh"
};
const styleSearch = {
    padding: "0% 0% 0% 25%"
};
function myFunc() {
    alert('Se ha dado clic al botón!')
}
export default ExperienciesList;