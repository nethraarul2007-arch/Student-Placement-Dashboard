import React, { useState, useEffect, useContext, createContext, useMemo } from 'react';
const h = React.createElement;
import { useApp } from '../context/AppContext.jsx';
import { api } from '../services/api.js';
import { useLoad } from '../hooks/useLoad.js';

export function Dashboard(){const {user,apps}=useApp(),jobs=useLoad(api.jobs),trend=useLoad(api.trend);
 if(!jobs||!trend)return h("p",null,"Loading…");
 const c=s=>apps.filter(a=>a.status===s).length,max=Math.max(...trend.map(t=>t[1]));
 const due=jobs.filter(j=>!apps.some(a=>a.jobId===j.id)).sort((a,b)=>a.deadline.localeCompare(b.deadline)).slice(0,4);
 return h("div",null,h("h1",null,"Welcome, "+user.name.split(" ")[0]),
  h("div",{className:"grid"},[["Applied",apps.length,""],["Interviews",c("Interview"),"Interview"],["Selected",c("Selected"),"Selected"],["Rejected",c("Rejected"),"Rejected"]].map(([l,n,k])=>h("div",{className:"card stat",key:l},h("b",{className:k},n),h("span",null,l)))),
  h("div",{className:"grid",style:{marginTop:14,gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))"}},
   h("div",{className:"card"},h("h3",null,"Placement trend (offers by month)"),
    h("svg",{viewBox:"0 0 300 150",width:"100%",role:"img","aria-label":"Placement trend"},trend.map(([m,v],i)=>{const bh=v/max*100;return h("g",{key:m},h("rect",{x:12+i*48,y:120-bh,width:32,height:bh,rx:4,fill:"var(--pr)"}),h("text",{x:28+i*48,y:140,textAnchor:"middle",fontSize:11,fill:"var(--mu)"},m),h("text",{x:28+i*48,y:114-bh,textAnchor:"middle",fontSize:10,fill:"var(--tx)"},v))}))),
   h("div",{className:"card"},h("h3",null,"Upcoming deadlines"),due.map(j=>h("div",{className:"li",key:j.id},h("span",null,j.company+" · "+j.role),h("span",{className:"muted"},j.deadline))))))}