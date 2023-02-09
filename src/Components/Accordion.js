import React,{useState} from 'react'

function Accordion() {
    const [flag,setFlag]=useState(false)
    // let test=setFlag(true)
    // console.log(test)
    function appearDiv(){
        if(flag==false){
            setFlag(true)
        }
        else
        {
            setFlag(false)
        }
    }
  return (
    <div style={{left:150}} className='position-relative w-75'>
        <button onClick={appearDiv} className=' d-flex justify-content-between  fs-2 fw-semibold text-start w-75 btn btn-success'>
            <span>Open</span>
            <span >+</span>
        </button>
        <div className='bg-success w-75 rounded' style={{display:flag?'block':'none', height:200,overflowX:"scroll", color:"antiquewhite",padding:10}}>
            <p>
                Hellooooooooooooooooooooooooooooooooooooooooooooooooooo
                ooooooooooooooooooooooooooooooooooooooooooooooooooooooo
            </p>
        </div>
    </div>
  )
}

export default Accordion