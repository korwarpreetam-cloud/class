import React from 'react'

const ArrayMethods = () => {
    let arr=[10,20,30,40]

    let sqr=[]
    for ( let i =0;i<arr.length;i++){
        let sqvl=arr[i]*arr[i];
        sqr.push(sqvl);


    }
    console.log("square",sqr);

    let cube=[]
    for(let i =0;i<arr.length;i++){
        let cuboi=arr[i]*arr[i]*arr[i];
        cube.push(cuboi);
    }
    console.log("cube",cube);


    function map(arr,cb){
        let newarr=[];
        for(let i=0;i<arr.length;i++){
            let newval=cb(arr[i])
            newarr.push(newval);
        }
        return newarr;
    }
    const doublenum=(val)=>{
        return 2*val;
    }
     const squr=(val)=>{
        return val*val;
    }
     const cuboid=(val)=>{
        return val*val*val;
    }
    console.log("map function",map(arr,doublenum))
     console.log("map function",map(arr,squr))
      console.log("map function",map(arr,cuboid))

      ////filter funciton

function filter(arr, cb) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

const isEven = (val) => {
    return val % 2 === 0;
}

console.log("even numbers", filter(arr, isEven));

  return (
    <div>

    </div>
  )
}

export default ArrayMethods
