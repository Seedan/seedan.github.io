
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import './App.css';
import { useState } from 'react';

function App() {

  // Row Data: the data to be displayed.
  const [rowData, setRowData] = useState([
    {Клиент: "1", ФИО: "Иванов В.И.", Телефон: 123, Email: "нет"},
    {Клиент: "2", ФИО: "Шишкин Г.Д.", Телефон: 432, Email: "dafd@gfttre"},
    {Клиент: "3", ФИО: "Мамаев Ф.Д.", Телефон: 543434, Email: "dsd@erer.ce"},
    {Клиент: "4", ФИО: "Андреев А.А.", Телефон: 121231313, Email: "dsdsd22@434.ri"},
  ]);

  const [colDefs, setColDefs] = useState ([
    {field:"Клиент"},
    {field:"ФИО"},
    {field:"Телефон"},
    {field:"Email"},
  ]);
  return (
    <div className='ag-theme-quartz' style={{height: 500}}>
      <AgGridReact rowData={rowData} columnDefs={colDefs}/>
    </div>
  );
}

export default App;
