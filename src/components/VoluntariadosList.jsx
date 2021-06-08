import React, { useState} from 'react';
import Voluntariado from "./Voluntariado";

function VoluntariadosList() {

    const [voluntariados, setVoluntariados] = useState([
        {id:1, title: "Limpiemos las playas", body: "Necesitan ayuda para limipiar la Barceloneta", image: null, owner: "Clara"},
        {id:2, title: "Ayuda para sintechos", body: "Muchas personas sin casa por Girona, ven a colaborar", image: null, owner: "Eustaquio"}
    ]);

    return (
        <ul>
            {voluntariados.map((volutariado) => (
                <Voluntariado key={volutariado.id} voluntariado={volutariado} />
            ))}
        </ul>
    );
}

export default VoluntariadosList;