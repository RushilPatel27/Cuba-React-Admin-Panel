import React from 'react'

export default function Button(props) {

console.log(props.title)

const handelFun = () => {
  alert(props.title)
}

    return (
        <div>
            <button onClick={handelFun}>
                {props.title}
            </button>
        </div>
    )
}
