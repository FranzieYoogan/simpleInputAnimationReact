import { useState } from 'react'
import './assets/css/input.css'
function Input() {

    const [state,setState] = useState(false)

    return(

        <>

            <div className='containerInput'>
                    <label className={'labelStyle ' + (state ? 'stateActive' : '')} htmlFor="text">Email</label>
                    <input onFocus={() => setState(true)} onBlur={() => setState(false)} name="text" id="text" type="text" />
                    

            </div>
        
        </>

    )

}

export default Input