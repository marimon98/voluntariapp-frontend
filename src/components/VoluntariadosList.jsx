import React, { useState} from 'react';
import Voluntariado from "./Voluntariado";

function VoluntariadosList({voluntariados,apuntarseVoluntariado}) {

    const [voluns, setVoluns] = useState(voluntariados());

    const funcApuntarse = (id) => {
        apuntarseVoluntariado(id);
        setVoluns(voluntariados());
    }

    return (
        <div>
            Voluntariats disponibles <br/>
            {/*<!-- Voluntariados listados -->*/}
            { /*<!-- Divider -->*/}
            <hr className="sidebar-divider d-none d-md-block"/>
            <div style = {scroll}>
                {voluns.map((volutariado) => (
                    <Voluntariado key={volutariado.id} voluntariado={volutariado} handleInscription={funcApuntarse} />
                ))}
            </div>
        </div>
    );

}

const scroll = {
    overflowY: "scroll",
    maxHeight: "59vh"
};
const styleSearch = {
    padding: "0% 0% 0% 25%"
};
function myFunc() {
    alert('Se ha dado clic al botón!')
}

export default VoluntariadosList;