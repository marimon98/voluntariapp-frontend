import React, {Fragment} from 'react';
import {Link, Route} from 'react-router-dom';
import Home from "./Home";
import VoluntariadosList from "./VoluntariadosList";
import Enrolled from "./Enrolled";
import UserProfile from "./UserProfile";
import Experiencies from "./ExperienciesList";

function Navigation() {
    return (
        <Fragment>
            <Route path="/" exact component={Home} />
            <Route path="/general" component={VoluntariadosList} />
            <Route path="/enrolled" component={Enrolled} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/experiencies" component={Experiencies} />
            <Route path="/rankings" component={UserProfile} />
            <Route path="/login" component={UserProfile} />

        </Fragment>
    );
}

export default Navigation;