import React, { useState } from 'react'

const App = () => {
  
const [count,setCount]=useState(0);

 const inco=()=>{
  
  setCount(count+1)
  

 }
 const dec=()=>{
  setCount(count-1)
  
 }
  return (
    <div>

 <div className='main'>
  <div className='screen'>{count}</div>
  <div className='lowerbox'>
    <div><button className='inc' onClick={inco}>increse</button></div>
    <div><button className='dec' onClick={dec}>decrease</button></div>
  </div>
 </div>
    </div>
    
  )
  
}

export default App


