import React from 'react'
import styles from './login.module.css'
import { connect } from 'react-redux'
import { doGoogleLoginAction } from '../../redux/userDuck'

function LoginPage({ loggedIn, fetching, doGoogleLoginAction }) {

    function doLogin() {
        doGoogleLoginAction()
    }

    if (fetching) return <h2> Cargando... </h2>
    
    return (
        <div className={styles.container}>
            {loggedIn ?
                <div>
                    <h1>
                        Cierra tu sesión
                    </h1>

                    <button>
                        Cerrar Sesión
                    </button>
                </div>
                :
                <div>
                    <h1>
                        Inicia Sesión con Google
                    </h1>                
                    
                    <button onClick={doLogin}>
                        Iniciar
                    </button>
                </div>
            }
        </div>
    )
}

function mapState({ user: {fetching, loggedIn} }) {
    return {
        fetching,
        loggedIn
    }
}

export default connect(mapState, { doGoogleLoginAction })(LoginPage)