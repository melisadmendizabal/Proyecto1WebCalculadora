import {useState} from "react"

export function useCalculate() {
    const [value, setValue] = useState('')
    const [preNumbers, setPreNumbers] = useState('')
    const [limpiar, setLimpiar] = useState(false)
    const listNums = [ '1','2','3','4','5','6','7','8','9','0']
    let u = ''
    let number = 0
    let result = null
    let bNumber = 0
    const setButtonsValues = (input) => {
        
        
        if (listNums.includes(input)) {

            

            if (limpiar ===true) {
                setValue(input)
                setLimpiar(false)

            } else {
            
            console.log('numnum')
            setValue((screen) => screen + input)
            }



        } else {
            

            
            
            switch (input) {
                case '+':
                    number = parseInt(value)                    

                    if (preNumbers !== ''){
                        result = preNumbers + number
                        setPreNumbers(result)
                        setValue(result)
                        
                    } else {
                        setPreNumbers(number)
                        
                    }
                     setLimpiar(true)
                   
                    break

                case '-':
                    number = parseInt(value)                    

                    if (preNumbers !== ''){
                        result = preNumbers - number
                        setPreNumbers(result)
                        setValue(result)
                        
                    } else {
                        setPreNumbers(number)
                        
                    }
                     setLimpiar(true)
                   
                    break

                case '*':
                    number = parseInt(value)                    

                    if (preNumbers !== ''){
                        result = preNumbers * number
                        setPreNumbers(result)
                        setValue(result)
                        
                    } else {
                        setPreNumbers(number)
                        
                    }
                     setLimpiar(true)
                   
                    break

                case '/':
                    number = parseInt(value)                    

                    if (preNumbers !== ''){
                        result = preNumbers / number
                        setPreNumbers(result)
                        setValue(result)
                        
                    } else {
                        setPreNumbers(number)
                        
                    }
                     setLimpiar(true)
                   
                    break

                case '=':
                    setValue(result)

                    break

                case '+/-':
                    setValue(-number)

                    break




                case 'C':
                    setValue('')
                    setLimpiar(true)
                    console.log('Valor limpio: ',value)
            
                default:
                    break
            }
            
            console.log('waa')
        }
        

        //setValue((screen) => screen + input)
    }
    return {
        value,
        setButtonsValues,
    }

}