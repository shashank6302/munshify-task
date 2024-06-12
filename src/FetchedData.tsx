import React, { useEffect, useState } from "react"


export const FetchedData = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        HandleFetch();
    })

    const HandleFetch = () => {
        fetch("https://dummyjson.com/posts")
            .then((response) => response.json())
            .then((data) => setData(data.posts))
    }
    return (
        <>
            Hello Fetched Data
            {data ? data.map((item: string) => {
                return (
                    <table>
                        <tr>
                            <td>{item.title}</td>
                        </tr>

                    </table>
                )
            }) : "Loading..."}
        </>
    )
}