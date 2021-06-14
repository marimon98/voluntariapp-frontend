import React, {useState} from 'react';
import userPhoto from './img/generic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faMapMarker, faCertificate} from '@fortawesome/free-solid-svg-icons';

function UserProfile () {
    const [showButton, setShowButton] = useState(false);

   const [usuario, setUsuario] = useState(
        {id:1, user: "Miquel Perez", email: "miquel.p@example.com",aboutMe: "M'agrada molt fer voluntariats de caire ambiental. Crec que és el nostre bé més valuós"},
    );

    const[stringNom, setStringNom] = useState(usuario.user);
    const[stringEmail, setStringEmail] = useState(usuario.email);
    const[stringMe, setStringMe] = useState(usuario.aboutMe);

    const[stringEdit, setStringEdit] = useState("Edita");



    const buttonHandler = () => {
        setShowButton(current => !current);

        if(stringEdit == "Edita")setStringEdit("Guarda");
        else setStringEdit("Edita");
    }
    const [voluntariados, setVoluntariados] = useState([
        {id:1, title: "Recollida de deixalles: Terra Alta"},
        {id:2, title: "L'Ebre et necessita!"},

    ]);

    const [experiencia, setExperiencies] = useState([
        {id:1, title: "Festival Cruïlla", body: "Pots bescanviar les teves xapes per una entrada al Cruïlla!", image: null, owner: "Damm", xapes: "400", data : "20/8/2021", ciutat: "Barcelona"},
        {id:2, title: " \"Carlos de Pablo i el món\" al MACBA ", body: "Carlos de Pablo ens mostrarà la seva forma de veure el món amb la seva exposició al MACBA.", image: null, owner: "MACBA", xapes: "200",  data :"10/10/2021", ciutat: "Barcelona"},
        {id:3, title: " Concert virtual Michael Jackson", body: "Reviu un espectacle del rei del pop de manera online i exclusiva.", image: null, owner: "Tickets Ramon", xapes: "400",  data :"1/23/2022" , ciutat: "Online"}

    ]);


    return (
        <div>
            Perfil de usuario<br/><br/>

            <div>
                <div>
                     <div style = {row}>
                        <button style = {botonEdita} onClick  = {buttonHandler }>
                            <div style = {row}>
                                <FontAwesomeIcon icon={faPen} />  &nbsp; &nbsp;
                                <div style = {edita}> {stringEdit} </div>
                             </div>
                        </button>
                     </div>
                     <div style = {row}>
                        <div style = {column1}>

                            <div style = {localitzacio}> <img src={userPhoto} style = {widthMax}></img></div><br/>
                            <div style = {localitzacio}><FontAwesomeIcon icon={faMapMarker} />  &nbsp; Localització</div> <br/>
                            <div style = {localitzacio}><FontAwesomeIcon icon={faCertificate} />  &nbsp; 400 xapes</div>

                        </div>

                        <div style = {column2}>
                            <br/>
                                <div style = {title} >Nom Usuari</div>
                                <div style = {botonHidden(!showButton)} >{stringNom}</div>
                                <input type ="text" style = {botonHidden(showButton)} onChange = {(event) => {setStringNom(event.target.value);} }></input><br/>
                                <div style = {title} >Correu Electrònic</div>
                                <div style = {botonHidden(!showButton)} >{stringEmail}</div>
                                <input type ="text" style = {botonHidden(showButton)} onChange = {(event) => {setStringEmail(event.target.value);} }></input><br/>
                                <div style = {title} >Sobre mi</div>
                                <div style = {botonHidden(!showButton)} >{stringMe}</div>
                                <textarea  cols="40" style = {botonHidden(showButton)} onChange = {(event) => {setStringMe(event.target.value);} }></textarea><br/>
                            </div>
                        </div>
                        { /*<!-- Divider -->*/}
                        <hr className="sidebar-divider d-none d-md-block"/>
                        <ul style = {scroll}>
                            <div style = {column}>

                              <div style = {bold}>Voluntariats fets</div><br/>
                              {voluntariados.map((volutariado) => { return(<li style={subtitle}>  {volutariado.title} </li> ); })}

                            </div>
                            <div style = {column}>

                              <div style = {bold}>Experiències Bescanviades</div><br/>
                              {experiencia.map((volutariado) => { return(<li style={subtitle}>  {volutariado.title} </li> ); })}

                            </div>
                        </ul>
                    </div>
                </div>
        </div>
    );
}


const row = {
      display: "flex"
};

const column1 = {
    float: "left",
    width: "20%",
    padding: "10px",
    alignItem: "center"

};
const column2 = {
    float: "left",
    width: "80%",
    padding: "10px"
};
const column = {
    float: "left",
    width: "50%",
    padding: "10px"
};
const botonHidden = (showButton) =>( {
    display: (!showButton ? "none" : "block"),
});
const edita = {
    fontSize: 22
};
const localitzacio = {
    fontSize: 22,
    justifyContent: "center",
    display: "flex"
};

const botonEdita = {
    padding: "7px 15px 0px 10px",
    marginRight: "15%",
    marginLeft:"auto"
};
const widthMax = {
        width: "70%",
        height: "auto",
        borderRadius: "50%",
        justifyContent: "center",
        display: "flex"
};
const bold = {
    fontWeight: "bold"
};

const title = {
    fontSize: 22,
    color: "lightgrey"
};
const subtitle = {
    fontSize: 22,
    paddingLeft: "1%",
    paddingBottom: "12px"
};
const scroll = {
    overflowY: "scroll",
    maxHeight: "20vh"
};
export default UserProfile;