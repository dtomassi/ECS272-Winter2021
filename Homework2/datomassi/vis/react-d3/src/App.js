import React from 'react';
import BarChart from './BarChart';
import ScatterPlot from './ScatterPlot';
// import data from  './datasets/SF_Historical_Ballot_Measures.csv';
import data from './datasets/data_by_year.csv';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      data: data,
      id: "chart-1"
    }
  }

  render(){
    return (
      <div className="App">
        <h2>ECS 272 Assignment 3 D3 Template</h2>
        <div id="container"> 
        <div id="tooltip"></div>
        </div>
        <ScatterPlot data={this.state.data} width={this.state.width} height={this.state.height} />
      </div
 >   );
  }

}

export default App;
