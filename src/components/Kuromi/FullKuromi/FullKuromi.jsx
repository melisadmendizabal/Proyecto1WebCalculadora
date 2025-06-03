import { Hands } from "../Hands/Hands"
import { Head } from "../Head/Head"
import '../Hands/Hands.css'

export const FullKuromi = ({isButtonPressed}) => {
    return (
        <div className="allFace">
            <Head isButtonPressed = {isButtonPressed}></Head>
            <Hands></Hands>
        </div>
    )
}