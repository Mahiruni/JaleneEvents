"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function MobileMenu(){
 const [open,setOpen]=useState(false);
 return <><button className="mobile-menu-button" onClick={()=>setOpen(true)} aria-label="Open menu"><Menu/></button>{open&&<div className="mobile-menu">
  <button className="mobile-close" onClick={()=>setOpen(false)} aria-label="Close menu"><X/></button>
  <div className="mobile-menu-brand"><img src="/jalene-logo.svg" alt="Jalene Decor & Event"/></div>
  <nav><a href="#events" onClick={()=>setOpen(false)}>Events</a><a href="#services" onClick={()=>setOpen(false)}>Services</a><a href="#story" onClick={()=>setOpen(false)}>Our story</a><a href="#contact" onClick={()=>setOpen(false)}>Contact</a></nav>
  <a className="button button-light" href="#contact" onClick={()=>setOpen(false)}>Plan an event →</a>
 </div>}</>;
}