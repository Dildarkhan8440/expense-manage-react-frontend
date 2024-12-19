import "./css/Dashboard.css";

import { useEffect } from "react";
import React ,{useState} from 'react'
import axios from "axios";
import Nav from "./theme/Nav";
import Footer from "./theme/Footer";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
export default function Dashboard() {
  const navigate=useNavigate();
  const local_storage=JSON.parse(localStorage.getItem('user_data'));

  const [data, setData] = useState([]);
  const [category,setCategory]=useState('');
  const [date,setDate]=useState('');
  const [category_list,setCategoryList]=useState([]);
  const handleAdd = async (e) => {
    navigate('/addExpense', { replace: true });
  }
  async function getdata(string) {
    const response = await axios.get(process.env.REACT_APP_API_BASE_URL+'/api/expense/user/'+local_storage.data.id+string,{
      headers: { Authorization: 'Bearer ' + local_storage.token}
    });
    setData(response.data.data);
    // const response = await axios.get(process.env.REACT_APP_API_BASE_URL+'/api/expense/get/'+local_storage.data.id,{
    //   headers: { Authorization: 'Bearer ' + local_storage.token}
    // });
    // setData(response.data.data);
  } 
  const handleDelete=async (id) => {
      const response = await axios.delete(process.env.REACT_APP_API_BASE_URL+'/api/expense/delete/'+id,{
        headers: { Authorization: 'Bearer ' + local_storage.token}
      }).then(res=>{
        getdata()
      });
  }
  async function getcategory() {
    const response = await axios.get(process.env.REACT_APP_API_BASE_URL+'/api/expense/category',{
      headers: { Authorization: 'Bearer ' + local_storage.token }
    });
    setCategoryList(response.data.data);
  } 
  useEffect(() => {
    if(local_storage.token!=null)
    var string='';
    if(category!='' && date!=''){
      string='?cat_id='+category+'&date='+date;
    }
    if(category=='' && date!=''){
      string='?date='+date;
    }
    if(category!='' && date==''){
      string='?cat_id='+category;
    } 
    getcategory();
    getdata(string);
  },[category,date]);

  return (
    <>
      <div className="grid">
        <Nav></Nav>
        <div className="row col-md-12">
          <div className="col-md-1"></div>
          <div className="col-md-10 pt-4">
            <h2>Welcome {local_storage.data.name}!</h2>
            <h3>Expenses </h3>
            <div className="row col-md-12">
              <div className="col-md-2">
                <h5>Filters</h5>
              </div>
              <div className="col-md-4 row">
                <div className="col-md-5">BY Category </div>
                <div className="col-md-7 ">
                  <select className="form-control" name="category" onChange={(e) => setCategory(e.target.value)} >
                    <option value={''}>select</option> 
                    {category_list.map(item =>(
                      <option key={item.id} value={item.id}>{item.category_name}</option>
                    ))}
                    
                  </select>
                </div>
              </div>
              <div className="col-md-4 row">
                <div className="col-md-4">
                  <p>By Date</p>
                </div>
                <div className="col-md-8">
                  <input type="date" className="form-control" name="date"  onChange={(e) => setDate(e.target.value)}/>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary" onClick={handleAdd}>Add Expense</button>
              </div>
            </div>
            <hr></hr>
            <table className="table align-middle mb-0 bg-white table-hover table-bordered">
              <thead className="bg-light">
                <tr key={1}>
                  <th>Expense Name</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {data.map(item =>(
                <tr key={item.id}>
                  <td>{item.expense_name}</td>
                  <td>{item.category_id}</td>
                  <td>{item.amount}</td>
                  <td>{moment(item.expense_date).format('yyyy-MM-DD')}</td>
                  <td> <Link to={`/editExpense/${item.id}`} className="p-1"><button type="button" className="btn btn-primary btn-sm btn-rounded">Edit</button></Link>
                      <button type="button" className="btn btn-danger btn-sm btn-rounded" onClick={() =>handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          <div className="col-md-1"></div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
