import React from "react";

interface User{
    name:string,
    age:number
}

export const FirstFunctionalComponent=(props:User)=>{
    const {name,age}=props;
    return (
        <>
        <h1>Hello Functional Component</h1>
        <p>{name}</p>
        <p>{age}</p>
        
        </>
    )
}
