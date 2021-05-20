import React from 'react'
import { Card } from 'react-bootstrap'
import "./Profile.css"

const Profil = ({data,show}) => {

    return (
<div >
    <img className="im" src={data.photo} alt=""  />
    <div className="tout">
      <div className="part1">
        <h1 style={{color: "#33334d"}}> {data.fullName} </h1> 
        <h3 style={{color: "#666699"}}> {data.profession}</h3>
        <h4 style={{color: "#b3b3cc"}}> {data.lieu}</h4>
        <br />
        <br />
        <button className="bou" onClick={()=>show(data.fullName)}> A propos</button>
      </div>
      <div className="part2">
        <h3 style={{color: "#52527a"}}> {data.enis} </h3> 
        <h3 style={{color: "#52527a"}}> {data.job}</h3>
        <h3 style={{color: "#52527a"}}> {data.link}</h3>
      </div>
    </div>

</div>
    )
}

export default Profil
