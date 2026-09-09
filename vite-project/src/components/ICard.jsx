import React from 'react'

function ICard(props) {
  return (
   <div style={{ border: "1px solid black", width: "300px", height: "400px", padding: "10px", margin: "10px" }}>
    <h2>College: {props.data.college}</h2>
    <div>
      <img src={props.data.pic} height="200px" width="200px" alt={`${props.data.name} Profile`} />
    </div>
    <h2>Roll No: {props.data.rollNo}</h2>
    <h2>Name: {props.data.name}</h2>
    <h2>Branch: {props.data.branch}</h2>
   </div>
  )
}

export default ICard