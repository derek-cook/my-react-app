import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Table from './Components/Table';

class App extends Component {



  render() {
      var tableItems = [
        {"id":1,"first_name":"Millicent","last_name":"Craister","age":15,"gender":"Female","height":21,"hair":"Green"},
        {"id":2,"first_name":"Oralla","last_name":"Bearham","age":53,"gender":"Female","height":92,"hair":"Orange"},
        {"id":3,"first_name":"Roshelle","last_name":"Thorrington","age":88,"gender":"Female","height":100,"hair":"Violet"},
        {"id":4,"first_name":"Tibold","last_name":"Onele","age":79,"gender":"Male","height":7,"hair":"Green"},
        {"id":5,"first_name":"Laina","last_name":"Gladtbach","age":26,"gender":"Female","height":80,"hair":"Aquamarine"},
        {"id":6,"first_name":"Karina","last_name":"Reisk","age":35,"gender":"Female","height":20,"hair":"Red"},
        {"id":7,"first_name":"Pierrette","last_name":"Vassay","age":61,"gender":"Female","height":78,"hair":"Orange"},
        {"id":8,"first_name":"Hakim","last_name":"Willans","age":7,"gender":"Male","height":90,"hair":"Violet"},
        {"id":9,"first_name":"Marin","last_name":"Izsak","age":50,"gender":"Female","height":16,"hair":"Goldenrod"},
        {"id":10,"first_name":"Wilt","last_name":"Tondeur","age":53,"gender":"Male","height":81,"hair":"Fuscia"}
      ];

    return (
      <div className="App">
        <Navbar/>
        <Table title="People" items={tableItems}/>
      </div>
    );
  }
}

export default App;
