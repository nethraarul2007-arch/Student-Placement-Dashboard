import React, { useState, useEffect, useContext, createContext, useMemo } from 'react';
const h = React.createElement;
import { NavLink, Navigate, useNavigate, Outlet } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';
import { useForm, Field } from '../hooks/useForm.jsx';

export function Auth({mode}){const {login,register}=useApp(),nav=useNavigate(),[msg,setMsg]=useState("");
 const reg=mode==="register",f=useForm({name:"",email:"",password:""},reg?["name","email","password"]:["email","password"]);
 const submit=e=>{e.preventDefault();if(!f.validate())return;const r=reg?register({...f.vals,branch:"CSE",cgpa:"",phone:""}):login(f.vals.email,f.vals.password);r?setMsg(r):nav("/")};
 return h("div",{className:"auth"},h("div",{className:"card"},h("h1",null,reg?"Create account":"Student login"),
  h("form",{onSubmit:submit,noValidate:true},reg&&h(Field,{label:"Full name",f,k:"name"}),h(Field,{label:"Email",type:"email",f,k:"email"}),h(Field,{label:"Password",type:"password",f,k:"password"}),
  msg&&h("div",{className:"err"},msg),h("button",null,reg?"Register":"Login")),
  h("p",{className:"muted"},reg?"Already registered? ":"New here? ",h(NavLink,{to:reg?"/login":"/register"},reg?"Login":"Create account"))))}