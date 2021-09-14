import "./style.css"
import {useState} from "react"
import {members} from "./../../members"

function Form({callback}){

    const [id]=useState(`${members.length+1}`)
    const [name,setName]=useState("")
    const [type,setType]=useState("")

    return (
        <form className="Formulario">
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Name"/>
            <input className="Meio" type="text" value={type} onChange={(e)=> setType(e.target.value)} placeholder="Type"/>
            <button onClick={(e)=> e.preventDefault(callback(id,name,type))}>Adicionar</button>
        </form>
    )
}

export default Form