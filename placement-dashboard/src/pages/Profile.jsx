import React, { useState, useEffect, useContext, createContext, useMemo } from 'react';
const h = React.createElement;
import { useApp } from '../context/AppContext.jsx';
import { useForm, Field } from '../hooks/useForm.jsx';

export function Profile(){const {user,update}=useApp(),f=useForm({...user},["name","cgpa","phone"]),[ok,setOk]=useState(false);
 return h("div",null,h("h1",null,"Profile"),h("div",{className:"card",style:{maxWidth:480}},h("form",{className:"f",noValidate:true,onSubmit:e=>{e.preventDefault();if(f.validate()){update(f.vals);setOk(true)}}},
  h(Field,{label:"Full name",f,k:"name"}),h("label",null,"Email",h("input",{value:user.email,disabled:true})),h(Field,{label:"Branch",f,k:"branch"}),h(Field,{label:"CGPA (0–10)",f,k:"cgpa"}),h(Field,{label:"Phone",f,k:"phone"}),
  h("button",null,"Save changes"),ok&&h("span",{className:"muted"},"Profile updated ✓"))))}