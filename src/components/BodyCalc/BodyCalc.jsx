import { Buttons } from "../ButtonCalc/Buttons"
import { ScreenCalc } from "../ScreeenCalc/ScreenCalc"
import './bodyCalc.css'
import { useCalculate } from "./useCalculate"

export const BodyCalc = () => {
    const {value, setButtonsValues} = useCalculate()

    return (
        <div className="bodyStyle">
            <ScreenCalc value = {value}></ScreenCalc>
            <Buttons setButtonsValues = {setButtonsValues}></Buttons>
        </div>
    )
}