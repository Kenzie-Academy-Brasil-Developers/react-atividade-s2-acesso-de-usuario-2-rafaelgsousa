import "./style.css"

import Form from "../Form"

import {Link} from "react-router-dom"

function Home({members,callback}){
    return (
        <div className="home">
            <h2>Adicionar clientes</h2>
            <Form callback={callback}/>
            <h2>Clientes: </h2>
            {members.map((e,i)=> { 
                return (e.type==="pj"?
                <Link to={`/company/${e.id}`} key={i}>{e.name}</Link>
                :
                <Link to={`/customer/${e.id}`} key={i}>{e.name}</Link>)} 
            )}
        </div>
    )
}

export default Home