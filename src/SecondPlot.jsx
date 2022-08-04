import React, {useState, useEffect} from 'react';
import Plot from 'react-plotly.js';

export default function FirstPlot({data}) {
    const [x, setX] = useState([]);
    const [y, setY] = useState([]);
 
    useEffect(()=>{
      setX(data.map(item => item.x))
      setY(data.map(item => item.y))
    }, [data])

    return (
      <Plot
        data={[
          {
            x: x,
            y: y,
            type: 'scatter',
            mode: 'lines',
            marker: {color: 'red'},
          },
          {type: 'scatter', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 620, height: 440, title: 'A Fancy Plot'} }
      />
    );
 
}