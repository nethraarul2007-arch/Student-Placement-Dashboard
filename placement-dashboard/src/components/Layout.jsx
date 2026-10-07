import React, { useState, useEffect, useContext, createContext, useMemo } from 'react';
const h = React.createElement;
import { NavLink, Navigate, useNavigate, Outlet } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';

export function Layout(){const {user,notes,logout}=useApp();if(!user)return h(Navigate,{to:"/login"});
 const unread=notes.filter(n=>!n.read).length,L=(to,t,end)=>h(NavLink,{to,end},t);
 return h("div",{className:"app"},h("nav",{className:"side"},h("h2",null,"🎓 PlaceHub"),L("/","Dashboard",true),L("/jobs","Job Openings"),L("/applications","My Applications"),
  h(NavLink,{to:"/notifications"},"Notifications",unread>0&&h("b",null,unread)),L("/profile","Profile"),h("a",{href:"#",onClick:e=>{e.preventDefault();logout()}},"Logout")),
  h("main",{className:"main"},h(Outlet)))}