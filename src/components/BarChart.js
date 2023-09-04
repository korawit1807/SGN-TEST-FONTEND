import React, { useState, useEffect } from 'react';
import io from '../socket';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import configChart from '../config/initChart';
function BarChart(){
    const [ dataForChart, setDataChart]  = useState([])
    const [ chart, setChart ] = useState(dataForChart)
    let initChart = configChart(chart)

    const chartCallBack = ((data) => {
        //console.log(data)
    })

    useEffect(() => {
        io.connect()
        io.on("message", (data) => {
            const dataChart = getData(data)
            setChart(dataChart)
        },[])
        return () => {
          io.disconnect()
        }
    })
    
    const getData = (data) => {
        let output = Object.entries(data).map(data => {
            const [name, value] = data;
            return [value.title, Number(value.value)]
        })
        return [output][0];
    }
    return (
        <>
            <HighchartsReact
                highcharts = { Highcharts }
                options = { initChart }
                callback = { chartCallBack }
            />
        </>
    )
}



export default BarChart;