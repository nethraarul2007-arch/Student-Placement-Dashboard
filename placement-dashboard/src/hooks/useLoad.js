import React, { useState, useEffect } from 'react';
export function useLoad(fn){const [d,setD]=useState(null);useEffect(()=>{fn().then(setD)},[]);return d}