interface user{
    name:string[],
}

const First = (props:user) => {
    const {name}=props
  return (
    <div>
        <select name="" id="" style={{height:"50px",width:"150px",fontSize:"1.5rem"}}>
        {name.map((a,index)=>(
            <option key={index} value="">{a}</option>
        ))}
        </select>
    </div>
  )
}

export default First