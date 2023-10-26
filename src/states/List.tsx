import React, { ReactNode } from 'react'

type ListProps<T extends ReactNode> = {
        list: T[]
}

function List<T extends ReactNode>({list}:ListProps<T>) {
    return (
        <ul>
                {
                        list.map((e,i) => <li key={i}>{e}</li>)
                }
        </ul>
    )
}

export default List