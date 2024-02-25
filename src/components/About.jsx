import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    const[mystyle,setmystyle] = useState({
        color:"black",
        backgroundColor : "white"
    })
    const [btn,setbtn] = useState("Enable Light Mode")
    const togglestyle =()=>{
        if(mystyle.color == 'white'){
            setmystyle({
                color:"black",
                backgroundColor : "white"
            })
            setbtn("Enable Dark Mode")
        }else{
            setmystyle({
                color:"white",
                backgroundColor : "black"
            }) 
            setbtn("Enable Light Mode")
        }
    }
    return (
        <>
            <div className="container" style={mystyle}>
                <div className="px-4 py-5 my-5 text-center" style={mystyle}>
                    <img className="d-block mx-auto mb-4" src="https://yt3.ggpht.com/3kbr8nbf27DbJP_ooyJJFfg9wo_v3--9Bz4NGU7wuo6qAG9w3m8bLKCki8CRJA8fGy23v7KcSw=s800-c-k-c0x00ffffff-no-rj" alt="Universe" width="72" height="57" />
                    <h1 style={mystyle}><b><big>About Us</big></b></h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4"><strong>Sakib Al Rana</strong> Has Created This Amazing Website.He Is From Thakurgaon,Bangladesh.He Is A Student Of Class 7.Besides,He Is A Hard-Working Person.He Has A YouTube Channel Named <b>BOC-Block Of Code🔥</b>.You Can Vist This Channel.This Website Will Help You To Customize Your Text.Enjoy And Explore More 😊🥰
                        </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center" style={mystyle}>
                            <button type="button" className="btn btn-primary btn-lg px-4 gap-3"><Link to="/"><h3 className='text-white'>Home</h3></Link></button>
                            <button type="button" className="btn btn-warning btn-lg px-4"><Link to="https://www.youtube.com/channel/UCA9U7RD-l5wrbElzJKwcyQQ" className='text-dark' target='.blank'>Explore More</Link></button>
                        </div>
                            <button onClick={togglestyle} className="btn btn-dark my-4 gap-3 px-4 btn-lg " >{btn}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
