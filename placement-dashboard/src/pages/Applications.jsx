import React, { useState, useEffect, useContext, createContext, useMemo } from 'react';
const h = React.createElement;
import { useApp } from '../context/AppContext.jsx';
import { api } from '../services/api.js';
import { useLoad } from '../hooks/useLoad.js';

export function Applications(){const jobs=useLoad(api.jobs),{apps}=useApp(),[f,setF]=useState("All");if(!jobs)return h("p",null,"Loading…");
 const rows=apps.filter(a=>f==="All"||a.status===f),iv=apps.filter(a=>a.interview);
 return h("div",null,h("h1",null,"My applications"),
  iv.length>0&&h("div",{className:"card",style:{marginBottom:14}},h("h3",null,"Interview schedule"),iv.map(a=>{const j=jobs.find(x=>x.id===a.jobId);return h("div",{className:"li",key:a.jobId},h("b",null,j.company),h("span",null,a.interview))})),
  h("div",{className:"row"},["All","Applied","Interview","Selected","Rejected"].map(s=>h("button",{key:s,className:f===s?"":"ghost",onClick:()=>setF(s)},s))),
  h("div",{className:"card scroll"},h("table",null,h("thead",null,h("tr",null,["Company","Role","Applied on","Status"].map(t=>h("th",{key:t},t)))),
   h("tbody",null,rows.map(a=>{const j=jobs.find(x=>x.id===a.jobId);return h("tr",{key:a.jobId},h("td",null,j.company),h("td",null,j.role),h("td",null,a.date),h("td",{className:a.status},"● "+a.status))})))))}