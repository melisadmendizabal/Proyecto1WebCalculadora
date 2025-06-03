import './Skeleton.css'

export const Skeleton = () => {
    return (
        <div className="backS">
            <div className='content'>
                <div className="headS">
                    <div className='eyesS'>
                        <div className='eyeS'></div>
                        <div className='eyeS'></div>
                    </div>
                 </div>
                <div className="mouthS">
                    <div className='tooth'></div>
                    <div className='tooth'></div>
                </div>
            </div>
        </div>
    )
}