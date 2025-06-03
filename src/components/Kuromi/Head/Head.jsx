import { Ears } from '../Ears/Ears'
import { Normal } from '../Expressions/Normal/Normal'
import { Face } from '../Face/Face'
import { Skeleton } from '../Skeleton/Skeleton'
import './Head.css'
export const Head = ({isButtonPressed}) => {
    return (
        <div className='fullHead'> 
            <Ears></Ears>
            <div className="head">
                <div className="child">
                    <Skeleton></Skeleton>
                    <Face isButtonPressed = {isButtonPressed}></Face>
                </div>
            </div>
        </div>
    )
}