import React from 'react';

function Voluntariado({voluntariado, handleInscription}) {

    const {id, title, body, image, owner} = voluntariado;

    const inscription = () => {
        handleInscription(id);
    }

    return (
        <div>
            <h1 style={mystyle}>{title}</h1>
            {body} <br/>
            {owner} <br/>
            {}
        </div>
    );
}

const mystyle = {
    color: "orange",
    padding: "5px",
    fontSize: 25
};

export default Voluntariado;