import React from "react"
import ReactDOM from "react-dom"

var sample = (
   <div>
        <h2>HEADING</h2>
        <p>HELLO MR JAMRES</p>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
   </div>
)

// document.getElementById('root').append(sample)
ReactDOM.render(sample,document.getElementById('root'))