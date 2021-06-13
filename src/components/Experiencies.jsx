import React from 'react';
import userPhoto from './img/userX.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch,faCertificate, } from '@fortawesome/free-solid-svg-icons';

function Experiencies({experiencia, handleInscription}) {

    const {id, title, body, image, owner, xapes, data, ciutat} = experiencia;

    const inscription = () => {
        handleInscription(id);
    }

    return (
        <div>
            <div style = {row}>
                <div style = {column1}>
                    <img src={userPhoto} style = {widthMax}></img>
                    {image}

                </div>

                <div style = {column2}>
                    <div style = {row}>
                        <div style = {column2}>
                        <h1 style={mystyle}>{title}</h1>
                        <span style= {description}>{body}</span> <br/>
                        <span style= {nameUser}>{owner}</span> <br/>
                        </div>
                        <div style = {column1}>
                            <div style = {divXapa} ><span style= {xapaStyle}>{xapes} <FontAwesomeIcon icon={faCertificate} />  &nbsp; &nbsp; </span><br/></div><br/>
                            <span style= {dataStyle}>{data} </span><br/><br/>
                            <span style= {cityStyle}>{ciutat} </span><br/><br/>
                        </div>
                        {}
                    </div>
                </div>

            </div>
        { /*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block"/>
        </div>

    );
}

const mystyle = {
    color: "orange",
    padding: "0px 5px 5px 0px",
    fontSize: 25,
    fontWeight: "bold"
};

const row = {
      display: "flex"
};

const widthMax = {
      width: "90%",
      height: "auto"
};

const column1 = {
    float: "left",
    width: "20%",
    padding: "10px"
};
const column2 = {
    float: "left",
    width: "80%",
    padding: "10px"
};
const description = {
    fontSize: 22
};
const nameUser = {
    fontSize: 20,
    fontWeight: "bold"
};
const xapaStyle = {

    fontSize: 20,
    fontWeight: "bold",
    padding: "0px 0px 0px 15px"

};
const divXapa = {
    borderStyle: "solid",
    width: "50%",
    backgroundColor: "lightgrey",
    borderRadius: "50px"
};
const dataStyle = {
    fontSize: 20,
    fontWeight: "bold",
    padding: "0px 0px 0px 10px"
};
const cityStyle = {
    fontSize: 30,
    fontWeight: "bold",
    /*padding: "0px 0px 0px 10px"*/
};


export default Experiencies;