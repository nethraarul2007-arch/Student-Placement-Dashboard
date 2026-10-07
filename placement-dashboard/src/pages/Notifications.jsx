import React, { useState, useEffect, useContext, createContext, useMemo } from 'react';
const h = React.createElement;
import { useApp } from '../context/AppContext.jsx';

export function Notifications(){const {notes,readAll}=useApp();
 return h("div",null,h("h1",null,"Notifications"),h("div",{className:"row"},h("button",{className:"ghost",onClick:readAll},"Mark all read")),
  h("div",{className:"card"},notes.map(n=>h("div",{className:"li "+(n.read?"":"unread"),key:n.id},h("span",null,h("span",{className:"tag"},n.kind),n.text))),!notes.length&&h("p",{className:"muted"},"You're all caught up.")))}