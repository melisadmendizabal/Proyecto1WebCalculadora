import { Buttons } from "../ButtonCalc/Buttons"
import { FullKuromi } from "../Kuromi/FullKuromi/FullKuromi"
import { ScreenCalc } from "../ScreeenCalc/ScreenCalc"
import './bodyCalc.css'
import { useCalculate } from "./useCalculate"

export const BodyCalc = () => {
    const {value, setButtonsValues, buttonPressed, handleButtonPress} = useCalculate()

    return (
        <div>
            <FullKuromi isButtonPressed = {buttonPressed}></FullKuromi>
        <div className="bodyStyle">
            <ScreenCalc value = {value}></ScreenCalc>
            <Buttons setButtonsValues = {setButtonsValues} onButtonsPress={handleButtonPress}></Buttons>
        </div></div>
    )
}