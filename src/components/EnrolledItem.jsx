import React, {useState} from 'react';
import userPhoto from './img/userX.PNG';
import userPhoto1 from './img/cruilla.jpg';
import userPhoto2 from './img/macba.jpg';
import userPhoto3 from './img/michael.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faMapMarker, faCertificate} from '@fortawesome/free-solid-svg-icons';

function EnrolledItem({voluntariado, handleInscription}) {

    var {id, title, body, image, owner, enrolled, data, ciutat, premi} = voluntariado;

    const inscription = () => {
        handleInscription(id);
    }
        var photo;
        if(id == 1){
        photo = userPhoto1;
        }
        else if(id == 2){
         photo = userPhoto2;
        }
        else if (id == 3){
         photo = userPhoto3;
        }
        else{
         photo = userPhoto;
        }

    return (
        <div>
                <div style = {row}><div style = {column1}>
                   <span><img src={photo} style = {widthMax}></img></span>
                   {image}

               </div>

                <div style = {column2}>
                    <div style = {row}>
                        <div style = {column2}>
                            <h1 style={mystyle}>{title}</h1>
                            <span style= {description}>{body}</span> <br/>
                            <span style= {nameUser}>{owner}</span>
                            <button style = {divXapa2} >
                                <span style= {xapaStyle}>{premi}<FontAwesomeIcon icon={faCertificate} /></span>
                            </button>
                        </div>
                    </div>
                    <div style={column1}>
                        <span style= {dataStyle}>{ciutat} </span>
                        <span style= {dataStyle}>{data} </span>
                        <button style = {divXapa} onClick={inscription}><span style={xapaStyle}>Desapuntar-se</span></button>
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
    fontWeight: "bold"

};
const divXapa = {
    borderStyle: "solid",
    width: "100%",
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
const divXapa2 = {
    float: "right",
    marginRight: "30%",
    borderStyle: "solid",
    width: "10%",
    backgroundColor: "lightgrey",
    borderRadius: "50px"
};

export default EnrolledItem;