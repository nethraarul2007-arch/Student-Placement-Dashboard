import React, { useState, useEffect, useContext, createContext, useMemo } from 'react';
const h = React.createElement;
import { api } from '../services/api.js';

const Ctx=createContext();
const store={get(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
export function Provider({children}){
 const [users,setUsers]=useState(()=>store.get("users")||[]);
 const [user,setUser]=useState(()=>store.get("session"));
 const [apps,setApps]=useState([]),[notes,setNotes]=useState([]);
 useEffect(()=>{if(user)api.seed().then(d=>{setApps(d.apps);setNotes(d.notes)})},[user&&user.email]);
 const persist=(u)=>{setUser(u);store.set("session",u)};
 const v={user,apps,notes,
  register(u){if(users.some(x=>x.email===u.email))return "Email already registered";const n=[...users,u];setUsers(n);store.set("users",n);persist(u);return null},
  login(email,pw){const u=users.find(x=>x.email===email&&x.password===pw);if(!u)return "Invalid email or password";persist(u);return null},
  logout(){setUser(null);store.set("session",null);setApps([]);setNotes([])},
  update(p){const u={...user,...p};setUsers(users.map(x=>x.email===u.email?u:x));store.set("users",users.map(x=>x.email===u.email?u:x));persist(u)},
  apply(job){if(apps.some(a=>a.jobId===job.id))return;setApps([...apps,{jobId:job.id,status:"Applied",date:"2026-10-07"}]);setNotes([{id:Date.now(),kind:"Company",text:"Application submitted to "+job.company,read:false},...notes])},
  readAll(){setNotes(notes.map(n=>({...n,read:true})))}};
 return h(Ctx.Provider,{value:v},children)}
export const useApp=()=>useContext(Ctx);