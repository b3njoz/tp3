import { useState } from "react";

function Divs(){
    const [direccion, setDireccion] = useState("column")
    const [justificado, setJustitifado] = useState("baseline")
    const [alineado, setAlineado] = useState("center")

    return (
        <>
        <div style={{width:"600px", height:"400px", border:"1px solid black", display:"flex", flexDirection: direccion, alignItems: alineado, justifyContent: justificado}}>
            <div style={{backgroundColor: "red", width:"100px", height:"100px", flexBasis:"100px", margin:"5px", color:"white"}}>Div 1</div>
            <div style={{backgroundColor: "blue", width:"100px", height:"100px", flexBasis:"100px", margin:"5px", color:"white"}}>Div 2</div>
            <div style={{backgroundColor: "green", width:"100px", height:"100px", flexBasis:"100px", margin:"5px", color:"white"}}>Div 3</div>
        </div>
        <p>flex-direction </p>
        <select onChange={(e) => setDireccion(e.target.value)}>
            <option selected value="null">Seleccione una opcion</option>
            <option value="column">column</option>
            <option value="column-reverse">column-reverse</option>
            <option value="row">row</option>
            <option value="row-reverse">row-reverse</option>
        </select>
        <p>align-items</p>
        <select onChange={(e) => setAlineado(e.target.value)}>
            <option value="null">Seleccione una opcion</option>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="stretch">stretch</option>
            <option value="center">center</option>
            <option value="start">start</option>
            <option value="end">end</option>
        </select>
        <p>justify-content</p>
        <select onChange={(e)=> setJustitifado(e.target.value)}>
            <option value="null">Seleccione una opcion</option>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
        </select>
        </>
    )
}

export default Divs