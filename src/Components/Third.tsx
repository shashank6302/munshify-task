import { useEffect, useState } from "react"

interface User{
    id:number,
    login:string,
    avatar_url:string
}
const Third = () => {
    const [user,setUser]=useState<User[]>([])
    useEffect(()=>{
        fetch(`https://api.github.com/users`)
        .then(resp=>resp.json())
        .then(data=>setUser(data))
    })
  return (
    <div>
        <table border={1} style={{borderCollapse:"collapse"}} cellPadding={10}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                    {user.slice(0,4).map(data=>(
                <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.login}</td>
                    <td>
                        <img height={100} src={data.avatar_url} alt="" />
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Third