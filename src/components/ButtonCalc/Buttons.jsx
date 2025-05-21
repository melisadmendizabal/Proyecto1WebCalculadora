import { ButtonCalc } from "./ButtonCalc"
import './buttons.css'
 
 export const Buttons = () => {
    return(
        <div className= "Numbers">
            <ButtonCalc size = 'simple' background = 'pink' text = 'C'></ButtonCalc> 
            <ButtonCalc size = 'simple' background = 'pink' text = 'mod'></ButtonCalc>
            <ButtonCalc size = 'simple' background = 'pink' text = '+/-'></ButtonCalc>
            <ButtonCalc size = 'simple' background = 'pink' text = '/'></ButtonCalc>
            <ButtonCalc size = 'simple' background = 'white' text = '7'></ButtonCalc>
            <ButtonCalc size = 'simple' background = 'white' text = '8'></ButtonCalc>
            <ButtonCalc size = 'simple' background = 'white' text = '9'></ButtonCalc>
            <ButtonCalc size = 'simple' background = 'pink' text = 'x'></ButtonCalc>
            <ButtonCalc size = 'simple' background = 'white' text = '4'></ButtonCalc>
            <ButtonCalc size = 'simple' background = 'white' text = '5'></ButtonCalc>
            <ButtonCalc size = 'simple' background = 'white' text = '6'></ButtonCalc>
            <ButtonCalc size = 'simple' background = 'pink' text = '-'></ButtonCalc>
            <ButtonCalc size = 'simple' background = 'white' text = '1'></ButtonCalc>
            <ButtonCalc size = 'simple' background = 'white' text = '2'></ButtonCalc>
            <ButtonCalc size = 'simple' background = 'white' text = '3'></ButtonCalc>
            <ButtonCalc size = 'simple' background = 'pink' text = '+'></ButtonCalc>
            <div  className = 'full-row'><ButtonCalc size = 'long' background = 'white' text = '0'></ButtonCalc></div>
            <ButtonCalc size = 'simple' background = 'white' text = '.'></ButtonCalc>
            <ButtonCalc size = 'simple' background = 'pink' text = '='></ButtonCalc>
        </div>
    )
 }