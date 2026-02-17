import React from 'react'

const List = () => {
    const arr=[10,20,30,40,50]
  return (
 <>
 <ul>
    {arr.map((item,index)=>{

        const handleclick=()=>{
            alert(item +"it was clicked")
        }
        return <li
       
        ><span>{item}</span>
        <button onClick={handleclick}>click</button></li>
    })}
 </ul>
 </>
  );
};

export default List
