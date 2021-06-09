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
    var filteredList = experiencia;
    function handleClick(e) {
        e.preventDefault();

        filteredList = experiencia.map(volutariado =>{
            if(volutariado.title.includes("Fest")){
            //alert();
            return volutariado;
            }
                /*filteredList[volutariado.id] = volutariado : null,*/

            }

        );
        //console.log("filteredList "+filteredList.id);
        //alert(experiencia.map((volutariado) => ( volutariado.title.includes("Fest") )));
        //alert(filteredList.map((volutariado) => ( volutariado.title.includes("Fest") )));
        }

    return (
    <div>
    Experiències bescanviables <br/><br/>

        {/*<!-- Topbar Search -->*/}
        <span className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search" style = {fontSizeSearches} >Busca per ciutat: </span>
        <form
            className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                    aria-label="Search" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={handleClick}>
                        <FontAwesomeIcon icon={faSearch} />  &nbsp; &nbsp;
                    </button>
                </div>
            </div>
        </form>



        {/*<!-- Experiencies listadas -->*/}
        { /*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
        <ul style = {scroll}>
            {experiencia.map((volutariado) => (
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
    maxHeight: "65vh"
};
function myFunc() {
    alert('Se ha dado clic al botón!')
}
export default ExperienciesList;