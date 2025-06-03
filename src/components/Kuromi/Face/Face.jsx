import { Cute } from '../Expressions/Cute/Cute'
import { Normal } from '../Expressions/Normal/Normal'
import './Face.css'

export const Face = ({isButtonPressed}) => {
    return (
        <div className='face'>
            
            {isButtonPressed ===false ? <Normal/> :<Cute/>}
    
        </div>
    )
}