import React, {Component, Fragment} from 'react';
import {Link, Route} from 'react-router-dom';
import Home from "./Home";
import VoluntariadosList from "./VoluntariadosList";
import Enrolled from "./Enrolled";
import UserProfile from "./UserProfile";

class Navigation extends Component {
    render() {
        return (
            <Fragment>
                <Route path="/" exact component={Home} />
                <Route path="/general" component={VoluntariadosList} />
                <Route path="/enrolled" component={Enrolled} />
                <Route path="/profile" component={UserProfile} />
            </Fragment>
        );
    }
}

export default Navigation;