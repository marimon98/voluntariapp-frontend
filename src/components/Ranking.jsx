import React, {useState} from 'react';
import copa from './img/copa.png';
import copa2 from './img/copa2.png';
import copa3 from './img/copa3.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClock,faCertificate } from '@fortawesome/free-solid-svg-icons';

function Ranking () {

    const [usuario, setUsuario] = useState([
        {id:1, user: "Miquel Perez", email: "PuchiLoParteNoseque@protonmail.com",aboutMe: "Ex presi de la gene i em van fotre fora ara estic a Bruseles fent voluntariats molt guais!"},
        {id:2, user: "nuriRodri9", email: "PuchiLoParteNoseque@protonmail.com",aboutMe: "Ex presi de la gene i em van fotre fora ara estic a Bruseles fent voluntariats molt guais!"},
        {id:3, user: "voluntariGironès", email: "PuchiLoParteNoseque@protonmail.com",aboutMe: "Ex presi de la gene i em van fotre fora ara estic a Bruseles fent voluntariats molt guais!"},
        {id:4, user: "mql1998", email: "PuchiLoParteNoseque@protonmail.com",aboutMe: "Ex presi de la gene i em van fotre fora ara estic a Bruseles fent voluntariats molt guais!"},
        {id:5, user: "PereGutiZaplana", email: "PuchiLoParteNoseque@protonmail.com",aboutMe: "Ex presi de la gene i em van fotre fora ara estic a Bruseles fent voluntariats molt guais!"},
        {id:6, user: "Carla10", email: "PuchiLoParteNoseque@protonmail.com",aboutMe: "Ex presi de la gene i em van fotre fora ara estic a Bruseles fent voluntariats molt guais!"},
        {id:7, user: "CristinaLaCruz", email: "PuchiLoParteNoseque@protonmail.com",aboutMe: "Ex presi de la gene i em van fotre fora ara estic a Bruseles fent voluntariats molt guais!"},

    ]);

    return (
        <div>
            Ranking<br/><br/>
             <div style = {row}>
                    <button style = {botonEdita}>
                        <div style = {row}>

                         <FontAwesomeIcon icon={faClock} />  &nbsp; &nbsp;
                         <div style = {historicStyle}> Històric </div>
                        </div>
                    </button>
             </div>

            <div style = {rowH}>

                <div style = {mesTitle}>
                    Juny 2021
                </div>
                <ul style = {scroll}>
                <div style = {rowBoarder}>
                    <div style = {column}>
                        <div style = {mes}> <img src={copa2} style = {widthMax2}></img></div><br/>
                        <div style = {mesBold}> {usuario.map((volutariado) => {
                            if(volutariado.id == 2)return(volutariado.user);
                        })} </div>
                        <div style = {mes}> 1250 &nbsp;<FontAwesomeIcon icon={faCertificate} />   </div>
                    </div>
                    <div style = {column}>
                        <div style = {mes}> <img src={copa} style = {widthMax}></img></div>
                        <div style = {mesBig}> {usuario.map((volutariado) => {
                                                    if(volutariado.id == 1)return(volutariado.user);
                                                })}
                        </div>
                        <div style = {mes}> 1300 &nbsp;<FontAwesomeIcon icon={faCertificate} />   </div>
                    </div>
                    <div style = {column}>
                        <div style = {mes}> <img src={copa3} style = {widthMax2}></img></div><br/>
                        <div style = {mesBold}> {usuario.map((volutariado) => {
                                                    if(volutariado.id == 3)return(volutariado.user);
                                                })} </div>
                        <div style = {mes}> 1230 &nbsp;<FontAwesomeIcon icon={faCertificate} />   </div>
                    </div>
                </div>
                <div style = {rowBoarder}>

                    <div style = {columnHalf}>
                    <span style = {{fontSize: 40, padding: "0% 7% 0% 10%", fontWeight: "bold"}}>4.</span>
                        <span style = {{fontWeight: "bold"}}>{usuario.map((volutariado) => {
                            if(volutariado.id == 4)return(volutariado.user);
                        })}</span>
                         &nbsp; 1210 &nbsp;<FontAwesomeIcon icon={faCertificate} />
                    </div>
                    <div style = {columnHalf}>
                        <span style = {{fontSize: 40, padding: "0% 7% 0% 10%", fontWeight: "bold"}}>5.</span>
                        <span style = {{fontWeight: "bold"}}>{usuario.map((volutariado) => {
                            if(volutariado.id == 5)return(volutariado.user);
                        })}</span>
                         &nbsp; 1200 &nbsp;<FontAwesomeIcon icon={faCertificate} />
                    </div>
                </div>
                <div style = {rowBoarder}>

                    <div style = {columnHalf}>
                    <span style = {{fontSize: 40, padding: "0% 7% 0% 10%", fontWeight: "bold"}}>6.</span>
                        <span style = {{fontWeight: "bold"}}>{usuario.map((volutariado) => {
                            if(volutariado.id == 6)return(volutariado.user);
                        })}</span>
                         &nbsp; 1100 &nbsp;<FontAwesomeIcon icon={faCertificate} />
                    </div>
                    <div style = {columnHalf}>
                        <span style = {{fontSize: 40, padding: "0% 7% 0% 10%", fontWeight: "bold"}}>7.</span>
                        <span style = {{fontWeight: "bold"}}>{usuario.map((volutariado) => {
                            if(volutariado.id == 7)return(volutariado.user);
                        })}</span>
                         &nbsp; 900 &nbsp;<FontAwesomeIcon icon={faCertificate} />
                    </div>
                </div>
                </ul>
            </div>
        </div>
    );
}

const column = {
    float: "left",
    width: "33%",
    padding: "10px"
};
const columnHalf = {
    float: "left",
    width: "50%",
    padding: "10px"
};
const row = {
      display: "flex"
};
const rowBoarder = {
    display: "flex",
    borderStyle: "groove",
    padding: "0px 0px 20px 0px"
};
const rowH = {
      padding: "2%"
};
const botonEdita = {
    padding: "7px 10px 0px 10px",
    marginRight: "2%",
    marginLeft:"auto"
};
const  historicStyle= {
      fontSize: 22

};
const  mesTitle = {
    fontSize: 22,
    justifyContent: "center",
    display: "flex",
    fontWeight: "bold",

};
const  mes = {
    fontSize: 22,
    justifyContent: "center",
    display: "flex"
};
const  mesBig = {
    fontSize: 35,
    fontWeight: "bold",
    justifyContent: "center",
    display: "flex"
};
const  mesBold = {
    fontWeight: "bold",
    justifyContent: "center",
    display: "flex"
};
const widthMax = {
        width: "60%",
        height: "auto",

        justifyContent: "center",
        display: "flex"
};
const widthMax2 = {
        width: "30%",
        height: "auto",
        paddingTop: "80px",
        justifyContent: "center",
        display: "flex"
};
const scroll = {
      overflowY: "scroll",
      maxHeight: "57vh"
};
export default Ranking;