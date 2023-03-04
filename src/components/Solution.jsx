import React from 'react'
import { Link  } from 'react-router-dom'

export default function Solution() {
  return (
    <div>
         <div className='type-answer'>
                <h4>Write Solution Here :-</h4>
            </div>
            <textarea id="w3review" name="w3review" rows="15" cols="50"/>
            <br />
   <div className='submit'>

            <button>Submit</button>
            <button>Edit</button>

            <div className='pages'>
                <h4>Next Questions</h4>
                <span ><Link to={'/'} className='span'>1</Link></span>
                <span ><Link to={'/que2'} className='span'>2</Link></span>
                <span ><Link to={"/que3"} className='span'>3</Link></span>
            </div>
   </div>

           
    </div>
  )
}
