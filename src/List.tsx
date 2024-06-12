import React from "react"

interface userArray {
    details: userDeatils[]
}

interface userDeatils {
    name: string,
    add: string,
    exp: string
}

export const ListDetails = (props: userArray) => {
    const { details } = props;
    console.log(details);
    return (
        <>
            Hello List Component
            {details.map((item) => {
                return (
                    <table>
                        <tr>
                            <td>{item.name}</td>
                            <td> {item.add}</td>
                            <td>{item.exp}</td>
                        </tr>
                    </table>
                )
            })}
        </>

    )
}