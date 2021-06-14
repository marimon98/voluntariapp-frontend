import React, {Component, Fragment, useState} from 'react';
import {Link, Route} from 'react-router-dom';
import Home from "./Home";
import VoluntariadosList from "./VoluntariadosList";
import Enrolled from "./Enrolled";
import UserProfile from "./UserProfile";
import Experiencies from "./ExperienciesList";
import Ranking from "./Ranking";
import QrCode from "./QrCode"
import platja from "./img/playa.jpg";
import vent from "./img/vent.jpg";
import cursa from "./img/cursa.jpeg";

function Navigation () {

    const [voluntariados, setVoluntariados] = useState([
           {id:1, title: "Netegem les platges", body: "Es necessita ajuda per a netejar la platja de la Barceloneta.", image: platja, owner: "Coca-Cola Co.", enrolled: false, data: "03/10/2021", ciutat: "Barcelona", premi: 45},
           {id:2, title: "Families afectades per les ventades", body: "Vine a ajudar a les families que han estat víctimes de les ventades en les seves cases.", image: vent, owner: "Damm", enrolled: false, data: "21/02/2022", ciutat: "Cadaquès", premi: 60},
           {id:3, title: "Cursa pel cancer de pulmó", body: "Hi ha moltes persones que necessiten tractament pel cancer de pulmó. Vina a participar en una cursa solidària per a ajudar a aquestes persones.", image: cursa, owner: "MediaMarkt", enrolled: true, data: "10/08/2021", ciutat: "Girona", premi:80}
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
                <Enrolled voluntariados={getVoluntariados} desapuntarse={apuntarseVoluntariado}/>
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