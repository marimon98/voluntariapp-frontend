import React, {Component, Fragment, useState} from 'react';
import {Link, Route} from 'react-router-dom';
import Home from "./Home";
import VoluntariadosList from "./VoluntariadosList";
import Enrolled from "./Enrolled";
import UserProfile from "./UserProfile";
import Experiencies from "./ExperienciesList";
import Ranking from "./Ranking";
import QrCode from "./QrCode"

function Navigation () {

    const [voluntariados, setVoluntariados] = useState([
           {id:1, title: "Limpiemos las playas", body: "Necesitan ayuda para limipiar la Barceloneta", image: null, owner: "Clara", enrolled: false, data: "03/10/2021", ciutat: "Barcelona"},
           {id:2, title: "Voluna aux", body: "Ayuda a cosas", image: null, owner: "User1", enrolled: false, data: "03/10/2021", ciutat: "Aqui"},
           {id:3, title: "Maraton por el cancer de pulmón", body: "Hay muchas personas con cancer de pulmón que necesitan asistencia, ven a colaborar con este maratón solidario", image: null, owner: "Eustaquio", enrolled: true, data: "10/08/2021", ciutat: "Girona"}
    ]);

    function compare(a, b) {
        if (a.id < b.id) {
            return -1;
        }
        if (a.id > b.id) {
            return 1;
        }
        return 0;
    }

    const apuntarseVoluntariado = (id) => {
        console.log(voluntariados);
        let newVols = voluntariados.filter(v => v.id !== id);
        let vol = voluntariados.filter(v => v.id === id);
        vol[0].enrolled = !vol[0].enrolled;

        let vols = newVols.concat(vol).sort(compare);

        setVoluntariados(vols);
    }

    const getVoluntariados = () => {
        return voluntariados;
    }

    return (
        <Fragment>
            <Route path="/" exact component={Home} />
            <Route path="/general" >
                <VoluntariadosList voluntariados={getVoluntariados} apuntarseVoluntariado={apuntarseVoluntariado}/>
            </Route>
            <Route path="/enrolled">
                <Enrolled voluntariados={voluntariados} setVoluntariados={setVoluntariados}/>
            </Route>
            <Route path="/profile" component={UserProfile} />
            <Route path="/experiencies" component={Experiencies} />
            <Route path="/rankings" component={UserProfile} />
            <Route path="/login" component={UserProfile} />
            <Route path="/ranking" component={Ranking} />
            <Route path="/QrCode" component={QrCode} />

        </Fragment>
    );
}

export default Navigation;