import React, {useState} from 'react';
import Publicacion from "./Publicacion";
import imag from "./img/imagenPlaceHolder.png"

function Home () {
    const [publicaciones, setPublicaciones] = useState([
        {id:1, body: "Esteu atents perque en un parell de dies obrirem nous voluntariats per Barcelona i als voltants per a ajudar a protectores d'animals. No us ho perdeu!", image: null, owner: "Damm", data: "11/05/2021"},
        {id:2, body: "Descripció de publicació exemple.", image: imag, owner: "EmpresaX",  data: "xx/xx/20xx"},
        {id:3, body: "La cursa del divendres passat va ser tot un èxit i la gent va quedar molt contenta. Esperem que en les properes també tinguem aquesta participació o més.", image: null, owner: "Coca-Cola Co.",  data: "20/02/2021"}
    ]);

    return (
        <div>
            {/*<!-- Voluntariados listados -->*/}
            { /*<!-- Divider -->*/}
            <hr className="sidebar-divider d-none d-md-block"/>
            <div style = {scroll}>
                {publicaciones.map((publicacion) => (
                    <Publicacion key={publicacion.id} publicacion={publicacion}/>
                ))}
            </div>
        </div>
    );

}

const scroll = {
    overflowY: "scroll"
};
const styleSearch = {
    padding: "0% 0% 0% 25%"
};
function myFunc() {
    alert('Se ha dado clic al botón!')
}

export default Home;