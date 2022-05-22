import React, { useState } from 'react'
import {post} from 'axios'

export const CustomerAdd = () => {
  const [form,setForm] = useState({
    file: null,
    userName:'',
    birthday:'',
    gender: '',
    job:'',
    fileName: ''
  });
  const addCustomer = () =>{
    const url = '/api/customers';
    const formData = new FormData();

    formData.append('image', form.file);
    formData.append('userName', form.userName);
    formData.append('birthday', form.birthday);
    formData.append('gender', form.gender);
    formData.append('job', form.job); 
    console.log(formData);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return post(url, formData, config);
  }
  const handleFormSubmit =(e) => {
    console.log('handleFormSubmit');
    e.preventDefault();
    addCustomer()
      .then((response) => {
        console.log(response.data)
      })
  }
  const handleFileChange = (e) => {
    setForm({...form, file: e.target.files[0], fileName: e.target.value})
  }
  const handleValueChange = (e) => {
    
     let nextState = form[e.target.name] = e.target.value;
    console.log(form);
    /* setForm({...form, form[e.target.name]:e.target.value }); */

    setForm({...form, nextState}) 
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <h1>고객 추가</h1>
       프로필 이미지: <input type="file" name="file" file={form.file} onChange={handleFileChange} /><br/>
       이름: <input type="text" name="userName" value={form.userName} onChange={handleValueChange} /><br/>
       생연월일: <input type="text" name="birthday" value={form.birthday} onChange={handleValueChange} /><br/>
       성별: <input type="text" name="gender" value={form.gender} onChange={handleValueChange} /><br/>
       직업: <input type="text" name="job" value={form.job} onChange={handleValueChange} /><br/>
       <button type="submit">추가하기</button>
    </form>
  )
}
