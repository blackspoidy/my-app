import React from 'react'
export default function Navbar(props) {
  return (
    <div>
     <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="./index.html"><b>Text Utils</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="chkbx" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" id='chkbx'>Enable {props.mode === "light" ? "dark" : "light"}Mode</label>
</div>
    </div>
  </div>
</nav>
    </div>  
  )
}
