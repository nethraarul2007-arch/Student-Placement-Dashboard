import React, { useState, useEffect, useContext, createContext, useMemo } from 'react';
const h = React.createElement;

const rules={name:v=>v.trim().length<2?"Enter your full name":"",email:v=>/^\S+@\S+\.\S+$/.test(v)?"":"Enter a valid email",password:v=>v.length<6?"Minimum 6 characters":"",
 cgpa:v=>v===""||(+v>=0&&+v<=10)?"":"CGPA must be 0–10",phone:v=>v===""||/^\d{10}$/.test(v)?"":"Enter a 10-digit number"};
export function useForm(init,fields){const [vals,setVals]=useState(init),[errs,setErrs]=useState({});
 return {vals,errs,set:(k,v)=>setVals(s=>({...s,[k]:v})),validate(){const e={};fields.forEach(k=>{const m=rules[k](vals[k]||"");if(m)e[k]=m});setErrs(e);return !Object.keys(e).length}}}
export const Field=({label,type="text",f,k})=>h("label",null,label,h("input",{type,value:f.vals[k]||"",onChange:e=>f.set(k,e.target.value)}),f.errs[k]&&h("span",{className:"err"},f.errs[k]));