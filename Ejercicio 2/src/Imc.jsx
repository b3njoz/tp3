import { useState } from "react";

function Imc(){
    const [texto, setTexto] = useState("");
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);
    const [colorMensaje, setColorMensaje] = useState("");

    const calculo = () =>{
        const imc = peso / (altura**2);
        setImc(imc);
        if (imc < 18.5) {
          setTexto("nivel bajo");
          setColorMensaje('yellow');
        } else if (imc >= 18.5 && imc <= 24.9) {
          setTexto("nivel normal");
          setColorMensaje('green');
        } else if (imc >= 25 && imc <= 29.9) {
          setTexto("sobre peso");
          setColorMensaje('orange');
        } else if (imc >= 30) {
          setTexto("obesidad");
          setColorMensaje('red');
        }
      };
    return (
        <>
        <p>Introduzca su peso</p>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} required/><br></br>
        <p>Introduzca su Altura</p>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} /><br></br>
        <button type="submit" onClick={calculo}>Calcular</button>
        <div style={{backgroundColor: colorMensaje}}>
          <p>Tu imc es: {imc !== 0 ? imc.toFixed(1) : "Aún no calculado"}</p>
          <p>{texto}</p>
        </div>

        </>
    )
}

export default Imc