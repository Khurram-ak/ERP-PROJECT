import React from 'react'
import iconR from "../../Images/iconR.png"
import iconL from "../../Images/iconL.png"


export default function Arrow(props) {
console.log(props.direction.props.class);
    const styles = {
        style1:{
        // border: "2px solid gray",
        height: "30px",
        width: "30px",
        borderRadius: "50%",
        backgroundColor: 'white',
        opacity:"0.9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"},
            
    
    }
    return (
        <div className='arrow' style={styles.style1}>
            {props.direction.props.class=== "fas fa-angle-right" ?
            <img src={iconR} alt="r"/>:
            <img src={iconL} alt="l"/>
        }
       
        </div>
    )
}
