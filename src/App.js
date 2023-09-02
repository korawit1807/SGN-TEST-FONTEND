import React, { useState, useEffect } from 'react';
import socketClient  from 'socket.io-client';
//import moment from "moment";
import ChartRace from 'react-chart-race';
const url = "https://sgn-test-service.onrender.com"

function App() {
  const [data , setData] = useState([])
  useEffect(() => {
    const io = socketClient(url)
    io.connect()
    io.on("message", (data) => {
      setData(data)
    },  [])
    return () => {
      io.disconnect()
    }
  })
  return (
    <div>
      SGN-TEST-BAR CHART
      <ChartRace
        data = {data}
        backgroundColor = '#797979'
        width = {800}
       
        padding = {12}
        itemHeight = {40}
        gap = {12}
        titleStyle = {{ font: 'normal 400 13px Arial', color: '#fff' }}
        valueStyle = {{ font: 'normal 400 11px Arial', color: 'rgba(255,255,255, 0.42)' }}
      />
  </div>
  );
}

export default App;
