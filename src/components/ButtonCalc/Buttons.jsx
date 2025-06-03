import { ButtonCalc } from "./ButtonCalc"
import './buttons.css'
 
 export const Buttons = ({setButtonsValues, onButtonsPress}) => {
    const simbolos = ['C', 'mod', '+/-', '/', '7', '8', '9','x','4','5','6','-','1','2','3','+','0','.','=']
    const operadores = ['C', 'mod', '+/-', '/','x','-','+','=']
    return(
        <div className= "Numbers">         
            {simbolos.map((simbolo, index) => {
                if (operadores.includes(simbolo) ) {
                    return ( <ButtonCalc key= {index} size = 'simple' background = 'pink' text = {simbolo} 
                     onClick = {() => {setButtonsValues(simbolo); onButtonsPress() }}></ButtonCalc> )
                } else if (simbolo === '0') { return ( <div  className = 'full-row'><ButtonCalc size = 'long' 
                    background = 'white' text = '0' 
                    onClick = {() => setButtonsValues(simbolo)}></ButtonCalc></div> )
                } else { return ( <ButtonCalc key= {index} size = 'simple' background = 'white' text = {simbolo} 
                    onClick = {() => {setButtonsValues(simbolo); onButtonsPress()}}></ButtonCalc> )}
            })}
        </div>
)}