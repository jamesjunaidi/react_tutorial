import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
  return (
    <div>
      <h1> James </h1>
      <p> My name is James </p>
      <ul>
        <li> New York </li>
        <li> Tokyo </li>
        <li> Seoul </li>
      </ul>
    </div>
  )
}

ReactDOM.render(
  <MyInfo />,
  document.getElementById("root")
)