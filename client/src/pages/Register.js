import React from 'react'
import { Button, Form, Input,message } from 'antd';
import "./Register.css"
import {Link,useNavigate } from "react-router-dom"

import axios from 'axios'
const Register = () => {

const navigate= useNavigate()
 

  // form handler 
const onfinishHandler= async(values)=>{
try {
 const res=await axios.post(`/register`,values);

 if(res.data.success){
  message.success(`Register Successfully`);
  navigate('/login')
 }
 else{
  message.error(res.data.message)
 }

} catch (error) {
  console.log(error);
  message.error('Something went wrong')
}
}

  return (
   <>
   
   <div className="form-container">
    <Form layout="vertical" onFinish={onfinishHandler} className="card p-5 ">
      <h2 className='text-center'>Register Form </h2>
    <Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
<Link to="/login" className='m-2'>Already user login here</Link>


    
    <Button type="primary" htmlType="submit">
        Register
      </Button>
    </Form>
   </div>
   
   </>
  )
}

export default Register