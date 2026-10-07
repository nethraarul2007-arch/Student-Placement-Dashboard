import React, { useState, useEffect, useContext, createContext, useMemo } from 'react';
const h = React.createElement;
import { useApp } from '../context/AppContext.jsx';
import { api } from '../services/api.js';
import { useLoad } from '../hooks/useLoad.js';

export function Jobs(){const jobs=useLoad(api.jobs),{apps,apply}=useApp(),[q,setQ]=useState(""),[type,setType]=useState("All"),[pkg,setPkg]=useState(0);
 const list=useMemo(()=>(jobs||[]).filter(j=>(j.company+j.role+j.skills.join()).toLowerCase().includes(q.toLowerCase())&&(type==="All"||j.type===type)&&j.pkg>=pkg),[jobs,q,type,pkg]);
 if(!jobs)return h("p",null,"Loading…");
 return h("div",null,h("h1",null,"Job openings"),
  h("div",{className:"row"},h("input",{placeholder:"Search company, role, skill",value:q,onChange:e=>setQ(e.target.value)}),
   h("select",{value:type,onChange:e=>setType(e.target.value)},["All","IT Services","Product","Fintech"].map(t=>h("option",{key:t},t))),
   h("select",{value:pkg,onChange:e=>setPkg(+e.target.value)},[[0,"Any package"],[5,"5 LPA+"],[10,"10 LPA+"],[15,"15 LPA+"]].map(([v,l])=>h("option",{key:v,value:v},l)))),
  h("div",{className:"jobs"},list.map(j=>{const done=apps.some(a=>a.jobId===j.id);return h("div",{className:"card",key:j.id},h("h3",null,j.company),h("div",null,j.role),h("div",{className:"muted"},j.loc+" · ₹"+j.pkg+" LPA · "+j.type),
   h("div",{style:{margin:"8px 0"}},j.skills.map(s=>h("span",{className:"tag",key:s},s))),h("div",{className:"muted",style:{marginBottom:10}},"Apply by "+j.deadline),
   h("button",{disabled:done,onClick:()=>apply(j)},done?"Applied ✓":"Apply"))}),!list.length&&h("p",{className:"muted"},"No openings match your filters.")))}