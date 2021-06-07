import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <algo style={styles.barra}>
                    <Link to="/">
                        Inicio
                    </Link>
                </algo>

                <algo style={styles.barra}>
                    <Link to="/profile">
                        Perfil
                    </Link>
                </algo>
            </div>
        );
    }
}

const styles = {
    barra: {
        marginLeft: 30
    }
}

export default Navigation;