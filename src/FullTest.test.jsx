import {render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect,vi } from 'vitest'
import { BodyCalc } from './components/BodyCalc/BodyCalc'


describe( 'Funcionalidades Calculadora', () => {
    it('La pantalla muestra los números', async() => {
        render(<BodyCalc />)
        const user = userEvent.setup()
        await user.click(screen.getByText('5'))
        await user.click(screen.getByText('3'))

        expect(screen.getByText('53')).toBeInTheDocument()
    })

    it('La calculadora opera bien multiples operaciones concatenadas', async() => {
        render(<BodyCalc />)
        const user = userEvent.setup()
        await user.click(screen.getByText('2'))
        await user.click(screen.getByText('0'))
        expect(screen.getByText('20')).toBeInTheDocument()
        await user.click(screen.getByText('+'))
        await user.click(screen.getByText('5'))
        await user.click(screen.getByText('6'))
        expect(screen.getByText('56')).toBeInTheDocument()
        await user.click(screen.getByText('='))
        expect(screen.getByText('76')).toBeInTheDocument()
        await user.click(screen.getByText('-'))
        await user.click(screen.getByText('4'))
        await user.click(screen.getByText('x'))
        expect(screen.getByText('72')).toBeInTheDocument()
        await user.click(screen.getByText('2'))
        await user.click(screen.getByText('='))
        expect(screen.getByText('144')).toBeInTheDocument()

    })

    it('La pantalla no excede los 9 espacios incluyendo . y -', async() => {
        render(<BodyCalc />)
        const user = userEvent.setup()
        await user.click(screen.getByText('1'))
        await user.click(screen.getByText('2'))
        await user.click(screen.getByText('3'))
        await user.click(screen.getByText('4'))
        await user.click(screen.getByText('5'))
        await user.click(screen.getByText('.'))
        await user.click(screen.getByText('6'))
        await user.click(screen.getByText('7'))
        await user.click(screen.getByText('+/-'))
        await user.click(screen.getByText('9'))
        await user.click(screen.getByText('9'))
        expect(screen.getByText('-12345.67')).toBeInTheDocument()
 
    })

     it('La pantalla no muestra resultados que tengan 9 dígitos', async() => {
        render(<BodyCalc />)
        const user = userEvent.setup()
        await user.click(screen.getByText('9'))
        await user.click(screen.getByText('7'))
        await user.click(screen.getByText('9'))
        await user.click(screen.getByText('9'))
        await user.click(screen.getByText('9'))
        await user.click(screen.getByText('x'))
        await user.click(screen.getByText('8'))
        await user.click(screen.getByText('7'))
        await user.click(screen.getByText('8'))
        await user.click(screen.getByText('8'))
        await user.click(screen.getByText('8'))
        await user.click(screen.getByText('='))

        expect(screen.getByText('ERROR')).toBeInTheDocument()
        
    })

     it('La pantalla muestra resultados que exceden 9 digitos si estos contienen decimales y los aproxima', async() => {
        render(<BodyCalc />)
        const user = userEvent.setup()

        await user.click(screen.getByText('8'))
        await user.click(screen.getByText('/'))
        await user.click(screen.getByText('3'))
        await user.click(screen.getByText('='))
        expect(screen.getByText('2.6666667')).toBeInTheDocument()     
    })
})