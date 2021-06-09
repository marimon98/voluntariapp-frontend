import React, {Component} from 'react';
import userPhoto from './img/userX.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

function UserProfile () {
    return (
        <div>
            Perfil de usuario

            <div>
                        Ranking<br/><br/>
                        <div>
                         <div style = {row}>
                            <button style = {botonEdita}>
                                <div style = {row}>
                                    <FontAwesomeIcon icon={faPen} />  &nbsp; &nbsp;
                                    <div style = {edita}> Edita </div>
                                 </div>
                            </button>
                         </div>
                         <div style = {row}>
                            <div style = {column1}>
                                <img src={userPhoto} style = {widthMax}></img>

                            </div>
                            <div style = {column2}>
                                Column 2
                            </div>
                          </div>
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
    padding: "10px"
};
const column2 = {
    float: "left",
    width: "80%",
    padding: "10px"
};
const edita = {
    fontSize: 22
};
const botonEdita = {
    padding: "7px 15px 0px 10px",
    marginRight: "15%",
    marginLeft:"auto"
};
const widthMax = {
        width: "90%",
        height: "auto",
        borderRadius: "50%"
  };
export default UserProfile;