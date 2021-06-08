import React from 'react';

function Voluntariado({voluntariado}) {

    const {id, title, body, image, owner} = voluntariado;

    return (
        <div>
            <h2>{title}</h2>
            {body} <br/>
            {owner} <br/>
            {}
        </div>
    );
}

export default Voluntariado;