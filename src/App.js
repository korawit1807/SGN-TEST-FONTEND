import React, { useState, useEffect } from 'react';
import io from './socket';
import ChartRace from 'react-chart-race';
import HeaderBar from './components/HeaderBar';
import DisplayDate from './components/DisplayDate';
function App() {
  const [data , setData] = useState([])
  useEffect(() => {
    io.connect()
    io.on("message", (data) => {
      setData(data)
    },[])
    return () => {
      io.disconnect()
    }
  })
  return (
    <div>
      <HeaderBar/>
      <DisplayDate/>
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
