import React, {useState} from 'react';
import copa3 from "./img/copa3.png";

function Publicacion({publicacion}) {

    var {id, body, image, owner, data} = publicacion;


    return (
        <div>
            <div style = {row}>
                <div style = {column2}>
                    <div style = {row}>
                        <div style = {column2}>
                            <h1 style={mystyle}>{owner}</h1>
                            <span style= {description}>{body}</span>
                            <img src={image} style = {widthMax2}></img><br/>
                            <span style= {nameUser}>{"Publicat: " + data}</span>
                        </div>
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
const widthMax2 = {
    width: "30%",
    height: "auto",
    justifyContent: "center",
    display: "flex"
};

export default Publicacion;