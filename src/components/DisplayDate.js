import React, { useState, useEffect } from 'react';
import config from '../config';
import io from '../socket';
import moment from 'moment'
function DisplayDate(){
    const [ data, setData]  = useState([])
    
    useEffect(()=>{
        let initDate = new Date(config.initDate)
        setInterval(()=>{
            if(initDate === "2022-07-31"){
                initDate = new Date(config.initDate)
            } 
            io.emit("getDate", initDate)
            initDate = moment(initDate).add(1, 'days').format("YYYY-MM-DD")
            setData(initDate)
        }, 3000)
        return () => {
            io.disconnect()
        }
    }, [])
    return (
        <h3>{data}</h3>
    )
}

export default DisplayDate;