import {useParams} from "react-router-dom"

import {Link} from "react-router-dom"

function Company({members}){
    const params = useParams()
    const member = members.find((e)=>e.id===params.id)
    return(
        
        <div>
            {console.log(members)}
            <h1>Detalhes do cliente</h1>

            <p>
                Nome: {member && member.name}
            </p>

            <Link to="/">
                Voltar
            </Link>
        </div>
    )
}

export default Company