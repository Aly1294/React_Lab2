import React,{useState} from 'react'

function Coin() {
    const [ flag , setFlag]=useState(false)
    const [ Head , setHead]=useState(0)
    const [ Tail , setTail]=useState(0)
   
    let conuntHead=0;
    let conuntTail=0;
    function change (){
        if(flag==false){
            setFlag(true)
            conuntTail=Tail+1
            // console.log(conuntTail)
            conuntTail=setTail(conuntTail)
            
            

        }
        else{
            setFlag(false)
            conuntHead=Head+1
            // console.log(conuntHead)
            conuntHead=setHead(conuntHead)
            
        }
        
    }
  return(
    <div>
        <div>
            
            
            {flag?<img className=' rounded-circle 'style={{width:250}} src={require("./Tail.jpeg")} alt="Person Image"/>:<img className=' rounded-circle 'style={{width:250}} src={require("./Head.jpg")} alt="Person Image"/>}
        </div>

        <div>
            {flag?<button onClick={change} className='btn btn-success'>Flip to Head</button>:<button onClick={change} className='btn btn-success'>Flip to Tail</button>}
        </div>
        <br></br>
        <div>
            Head Repated : {Head} Times & Tail Repated : {Tail} Times
        </div>
    </div>
  )
}

export default Coin