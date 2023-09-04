import React, { useState, useEffect } from 'react';
import config from '../config';
import io from '../socket';
import moment from 'moment'
function DisplayDate(){
    const [ date, setDate]  = useState([])
    
    useEffect(()=>{
        let initDate = new Date(config.initDate)
        setInterval(()=>{
            initDate = moment(initDate).add(1, 'days').format("YYYY-MM-DD")
            setDate(initDate)
            io.emit("getDate", initDate)
            if(initDate === "2020-04-30"){
                initDate = new Date(config.initDate)
            } 
        }, 2000)
        return () => {
            io.disconnect()
        }
    }, [])
    return (
        <h3>Date: {date}</h3>
    )
}

export default DisplayDate;