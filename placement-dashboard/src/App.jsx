import React, { useState, useEffect, useContext, createContext, useMemo } from 'react';
const h = React.createElement;
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from './context/AppContext.jsx';
import { Layout } from './components/Layout.jsx';
import { Auth } from './pages/Auth.jsx';
import { Dashboard } from './pages/Dashboard.jsx';
import { Jobs } from './pages/Jobs.jsx';
import { Applications } from './pages/Applications.jsx';
import { Notifications } from './pages/Notifications.jsx';
import { Profile } from './pages/Profile.jsx';

export function App(){return h(Provider,null,h(HashRouter,null,h(Routes,null,
 h(Route,{path:"/login",element:h(Auth,{mode:"login"})}),h(Route,{path:"/register",element:h(Auth,{mode:"register"})}),
 h(Route,{element:h(Layout)},h(Route,{index:true,element:h(Dashboard)}),h(Route,{path:"jobs",element:h(Jobs)}),h(Route,{path:"applications",element:h(Applications)}),h(Route,{path:"notifications",element:h(Notifications)}),h(Route,{path:"profile",element:h(Profile)})),
 h(Route,{path:"*",element:h(Navigate,{to:"/"})}))))}