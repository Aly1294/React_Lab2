import React,{useState} from 'react'


function CoinComponentAfterEdit() {
    const [ flag , setFlag]=useState(false)
    const [ Head , setHead]=useState(0)
    const [ Tail , setTail]=useState(0)
   
    let conuntHead=0;
    let conuntTail=0;

    let randomNum= Math.floor((Math.random() * 10) + 1);
    // console.log("bbb"+randomNum)
    function changeToRondomImage (){
        if(randomNum>=0 && randomNum<=5){
            setFlag(true)
            conuntTail=Tail+1
            // console.log(conuntTail)
            conuntTail=setTail(conuntTail)

            randomNum= Math.floor((Math.random() * 10) + 1);
            
            

        }
        else{
            setFlag(false)
            conuntHead=Head+1
            // console.log(conuntHead)
            conuntHead=setHead(conuntHead)

            randomNum= Math.floor((Math.random() * 10) + 1);
            
        }
        
    }
  return(
    <div>
        <div>
            {flag?<img className=' rounded-circle 'style={{width:250}} src={require("./Tail.jpeg")} alt="Person Image"/>:<img className=' rounded-circle 'style={{width:250}} src={require("./Head.jpg")} alt="Person Image"/>}
        </div>

        <div>
            <button onClick={changeToRondomImage} className='btn btn-success'>Flip</button> 
        </div>
        <br>
        </br>
        <div>
            Head Repated : {Head} Times & Tail Repated : {Tail} Times
        </div>
    </div>
  )
}

export default CoinComponentAfterEdit