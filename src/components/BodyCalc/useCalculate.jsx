
import {useEffect, useRef, useState} from "react"

export function useCalculate() {
    const timeoutRef = useRef(null)
    const [buttonPressed, setButtonPressed] = useState(false)
    const [value, setValue] = useState('')
    const [preNumbers, setPreNumbers] = useState('')
    const [limpiar, setLimpiar] = useState(false)
    const [signo, setSigno] = useState('')
    const [decimal, setDecimal] = useState(false)
    const listOper = ['+', '-', 'x', '/', 'mod']
    const listNums = [ '1','2','3','4','5','6','7','8','9','0','.']

    const handleButtonPress = () => {
        console.log('Botttton')
        setButtonPressed(true)
        setTimeout(() => {
            setButtonPressed(false)
        }, 500)
    }

    useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

    
    const decimalControl = (resultDecimal) => {
        const str = resultDecimal.toString()
        const index = str.indexOf('.')
        const notPoint = index !== -1 ? str.slice(0, index +1) : str
        const long = notPoint.length 


        if (str.length < 9){
            return resultDecimal
        } else  {

            if (long > 8) {
                return 'ERROR'
            } else {
                const newNumber = resultDecimal.toFixed(9 - long)
                console.log('newNumber: ', newNumber)
                return newNumber
            }
        }
    }


    const operate = (a, b, operador) => {
        let result = null
        switch (operador) {
            case '+':
                result = a + b
                break
            case '-':
                result = a - b
                break
            case 'x':
                result = a * b
                break
            case '/':
                result = a / b
                break
            case 'mod':
                result = a % b
                break
            default:
                result = b
        }

        if (result.toString().length > 9) {
            if (result.toString().includes('.')) {
                return decimalControl(result)
            } else {
                return 'ERROR'
            }
        }
        return result
    }



    const setButtonsValues = (input) => {
        if (value === 'ERROR' || value.includes('ERROR')) {
            if (input === 'C') {
                // Permitir limpiar el error
                setValue('')
                setLimpiar(true)
             }
            return // Ignora input si hay error en pantalla
        }
        
         
        console.log(value.toString().length)
        if (listNums.includes(input) && value.length< 9) {

            if (listOper.includes(input)) {
                if (limpiar) {
                    setPreNumbers(value) // usa el valor como primer operando
                    setSigno(input)
                    setLimpiar(false)
                    return
                }
                // resto de lógica...
            }


            

            if (limpiar ===true) {
                setValue(input)
                setLimpiar(false)

            } else {

                if (input === '.'){
                    if (decimal === false){
                        setDecimal(true)
                        setValue((screen) => screen + input)
                    } else {
                        setValue('ERROR')
                    }

                } else  {
        
                    setValue((screen) => screen + input)
                }

            }

        } else if (input === '+/-'){
            if (value === '') return

            const flipped = (-parseFloat(value)).toString()

            // Evita que se pase de 9 caracteres
            if (flipped.length > 9) {
                setValue('ERROR')
                return
            }

            setValue(flipped)
            setPreNumbers('')
            setSigno('')

            setLimpiar(true)
                
        



        } else if (input === "C") {
            // Limpiar todo
            setValue("")
            setPreNumbers("")
            setDecimal(false)
            setLimpiar(true)

        } else if (input !== "=") {
            if (preNumbers && signo && value) {
                const result = operate(parseFloat(preNumbers), parseFloat(value), signo)
                setValue(result.toString())
                setPreNumbers('')
                setSigno('')
                setLimpiar(true)
            }
            // Si presionan un operador
            setDecimal(false)
            setSigno(input)

            if (preNumbers !== "") {
                // Si ya hay un número previo, realiza la operación
                const a = parseFloat(preNumbers)
                const b = parseFloat(value)
                const result = operate(a, b, signo)
                if (result === "ERROR") {
                    setValue(result)
                } else {
                    console.log('aaaaa')
                    setPreNumbers(result)
                    setValue(result.toString())
                }
            } else {
                setPreNumbers(value) // Guarda el número actual para la siguiente operación
                
            }
          
            
            setLimpiar(true)
             
            //setValue("");

       
        } else {
            // Si presionan "=" para ejecutar la operación
            const a = parseFloat(preNumbers)
            const b = parseFloat(value)

            if (!limpiar && preNumbers !== "" && signo !== "") {
                const result = operate(a, b, signo)
                if (result === "ERROR") {
                    setValue(result)
                } else {
                    setPreNumbers(result)
                    setValue(result.toString())
                }
            } else {
                setPreNumbers(b)
            }
           
            setSigno("")
            setLimpiar(true)
        }
    
           
               
        

       
    }
    return {
        value,
        setButtonsValues,
        buttonPressed,
        handleButtonPress,
    }

}