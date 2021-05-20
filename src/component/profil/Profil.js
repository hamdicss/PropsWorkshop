import React from 'react'
import "./Profile.css"
import PropTypes from "prop-types";

const Profil = ({data,show,show1}) => {

    return (
<div >
    <img className="im" src={data.photo} alt=""  />
    <div className="tout">
      <div className="part1">
        <h1 style={{color: "#33334d"}}> {data.fullName} </h1> 
        <br />
        <h3 style={{color: "#666699"}}> {data.profession}</h3>
        <br />
        <h4 style={{color: "#666699"}}> {data.lieu}</h4>
        <br />
        <button className="bou" onClick={()=>show(data.fullName)}> A propos</button>
      </div>
      <div className="part2">
        <h3 style={{color: "#666699"}}> {data.enis} </h3>
        <br /> 
        <h3 style={{color: "#666699"}}> {data.job}</h3>
        <br />
        <h3 className="clik" onClick={()=>show1(data.cor)} style={{color: "#666699"}}> {data.link}</h3>
      </div>
    </div>

</div>
    )
}
Profil.propTypes ={
  data:PropTypes.object
}
export default Profil
