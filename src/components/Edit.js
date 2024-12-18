import React, { useEffect, useLayoutEffect, useState } from "react";
import Nav from "./theme/Nav";
import Footer from "./theme/Footer";
import axios from "axios";
import { useParams } from 'react-router-dom';
import moment from "moment";

export default function EditExpense() {
    const { id } = useParams();
    const local_storage=JSON.parse(localStorage.getItem('user_data'));
    // const [expenseData,setExpenseData]=useState([]);
    const [expense_name,setExpenseName]=useState('');
    const [category,setCategory]=useState('');
    const [amount,setAmount]=useState('');
    const [date,setDate]=useState('');
    const [successMessage,setSuccessMsg]=useState('');
    const [errorMsg,setErrorMsg]=useState('');
    const [nameError,setNameError]=useState('');
    const [categoryError,setCategoryError]=useState('');
    const [amountError,setAmountError]=useState('');
    const [dateError,setDateError]=useState('');
    const [categoryList,setCategoryList]=useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(expense_name==''){
            setNameError('Please Enter Name');
        }
        if(category==''){
            setCategoryError('Please Enter Category');
        }
        if(amount==''){
            setAmountError('Please Enter Amount');
        }
        if(date==''){
            setDateError('Please Enter Date');
        } 
        if(expense_name!='' && category!='' && amount!='' && date!=''){
            async function add() {
                const response = await axios.patch(process.env.REACT_APP_API_BASE_URL+'/api/expense/update/'+id,
                {expense_name:expense_name,category_id:category,amount:amount,expense_date:date},
                { headers: { Authorization: 'Bearer ' + local_storage.token}});
                if(response.status==200){
                    setSuccessMsg('true');
                }else{
                    setErrorMsg('false');
                }
            }
            add();
        }
    }
    async function getData() {
        const response = await axios.get(process.env.REACT_APP_API_BASE_URL+'/api/expense/get/'+id,
            { headers: { Authorization: 'Bearer ' + local_storage.token}});
            if(response.data.data[0]){
                setExpenseName(response.data.data[0].expense_name);
                setCategory(response.data.data[0].category_id)
                setAmount(response.data.data[0].amount)
                setDate(response.data.data[0].expense_date)
            }
            
        const cat_response = await axios.get(process.env.REACT_APP_API_BASE_URL+'/api/expense/category',{
                headers: { Authorization: 'Bearer ' + local_storage.token }
              });
              setCategoryList(cat_response.data.data);
    }
    useEffect(() => {
        getData();
    }, [])
    return(
        <>
            <div className="grid">
                <Nav></Nav>
                <div className="row col-md-12 pt-5">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <h3>Add Your Expenses</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="name">Expense Name</label>
                                    <input type="text" className="form-control" name="expense_name" defaultValue={expense_name}  onChange={(e) => setExpenseName(e.target.value)} placeholder="Expense name"/>
                                    <span style={{color: "red"}}>{nameError}</span>
                                </div>
                                <div className="col">
                                    <label htmlFor="amount">Category</label>
                                    <select className="form-control" name="category" defaultValue={category} onChange={(e) => setCategory(e.target.value)}>
                                        {/* <option >Select Category</option> */}
                                        {categoryList.map(item=>(
                                            <option key={item.id}  value={item.id}>{item.category_name}</option>
                                        ))}
                                        
                                    </select>
                                    <span style={{color: "red"}}>{categoryError}</span>
                                </div>
                                
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="amount">Expense Amount</label>
                                    <input type="text" className="form-control" name="amount" defaultValue={amount}  onChange={(e) => setAmount(e.target.value)} placeholder="Expense Amount"/>
                                    <span style={{color: "red"}}>{amountError}</span>
                                </div>
                                <div className="col">
                                    <label htmlFor="name">Expense Date</label>
                                    <input type="date" className="form-control" name="expense_date" value={moment(date).format('yyyy-MM-DD')} onChange={(e) => setDate(e.target.value)} placeholder="Expense Date"/>
                                    <span style={{color: "red"}}>{dateError}</span>
                                </div>
                               
                            </div>
                            <hr></hr>
                            <div className="float-end">
                           
                                <button type="submit" className="form-control btn btn-primary">Submit</button>
                            </div>
                            <br></br>
                            <br></br>
                            {successMessage?<div className="alert alert-success" role="alert">Expenses Added Successfully</div>:''}
                            {errorMsg?<div className="alert alert-danger" role="alert">Something Went Wrong!</div>:''}
                        </form>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}