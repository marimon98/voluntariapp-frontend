import React, {useState} from 'react';
import EnrolledItem from "./EnrolledItem";

function Enrolled ({voluntariados,desapuntarse}) {

    const [voluns, setVoluns] = useState(voluntariados().filter(v => v.enrolled));

    const funcApuntarse = (id) => {
        desapuntarse(id);
        setVoluns(voluntariados().filter(v => v.enrolled));
    }

    const noHayVoluns = () => {
        if(voluns.length === 0) {
            return "Sembla que no ets inscrit a cap voluntariat"
        }
    }

    return (
        <div>
            Voluntariats on ets inscrit <br/>
            {/*<!-- Voluntariados listados -->*/}
            { /*<!-- Divider -->*/}
            <hr className="sidebar-divider d-none d-md-block"/>
            <div style = {scroll}>
                {voluns.map((volutariado) => (
                    <EnrolledItem key={volutariado.id} voluntariado={volutariado} handleInscription={funcApuntarse} />
                ))}
            </div>
            {noHayVoluns()}
        </div>
    );

}

const scroll = {
    overflowY: "scroll",
    maxHeight: "65vh"
};
const styleSearch = {
    padding: "0% 0% 0% 25%"
};
function myFunc() {
    alert('Se ha dado clic al botón!')
}

export default Enrolled;