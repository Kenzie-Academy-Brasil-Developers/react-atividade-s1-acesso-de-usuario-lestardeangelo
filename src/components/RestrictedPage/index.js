

function RestrictedPage({isLoggedIn, user, Login, Logout}){

    return(

        <div>

        {isLoggedIn ? 
        
            (
            <div>     
                <h1> Bem vindo {user}</h1>
                <button onClick={Logout}> exit </button>
            </div>
            )
        :
           ( 
           <div>
                <h1>Você não pode acessar essa página</h1>
                <button onClick={Login}> login </button>
            </div>
            )
        }
        </div>
    )
}

export default RestrictedPage