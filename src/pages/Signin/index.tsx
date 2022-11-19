import './styles.scss'
import { useState } from 'react'
import { GoogleLogo } from 'phosphor-react'

import { signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth'
import { auth } from '../../services/firebase'

export function Signin(){
    const [user, setUser] = useState<User>({} as User)


    function handleGoogleSignin(){
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    console.log(user.photoURL)
    return(
        <div className="container">
            <div className='user'>
                {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}
                <strong>
                    {user.displayName}
                </strong>
                <small>
                    {user.email}
                </small>
            </div>

            <h1>Acesse sua conta</h1>
            <span>
                Utilizando autenticação social, por exemplo, autenticação com a Google você<br />
                facilita a vida do usuario permitindo utilizar sua aplicação sem fazer cadastro.
            </span>

            <button type="button" className="button" onClick={handleGoogleSignin}>
                <GoogleLogo />
                Entrar com o google
            </button>
        </div>
        );
}