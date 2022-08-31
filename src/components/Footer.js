import React from 'react'

export default function Footer(props) {
  return (
    <div className="row fixed-bottom mb-3">
       <button className="btn btn-primary col-2" onClick={()=>{props.resetQuantity()}}>Reset</button>
       <div className='col-6 bg-dark text-white text-center'>
        {props.totalAmount}
       </div>
       <button className="btn btn-success col-2 ">Pay Now</button>
    </div>
  )
}
