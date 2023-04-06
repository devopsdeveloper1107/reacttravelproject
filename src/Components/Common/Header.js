import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Header()
{

  const [categoryMenu, setCategoryMenu]= useState([]);
  useEffect( ()=>{
    const getCategory= async()=>{
      const reqData= await fetch('http://localhost/travel/category');
      const resData= await reqData.json();
      //console.log(resData);
      setCategoryMenu(resData);

    }
    getCategory();
  },[]);
    return(

    <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container">
    <Link to='/' className="navbar-brand text-white" >DD Travel</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutus" className="nav-link">About Us</Link>
        </li>

        { categoryMenu.map( (resCategory, index)=>(
        <li className="nav-item dropdown" key={index}>
          <Link to={`/${resCategory.category_url}`} className="nav-link dropdown-toggle">
            { resCategory.category_title}
          </Link>          
        </li>
        ))
           }
        <li className="nav-item">
        <Link to="/contactus" className="nav-link" aria-disabled="true">Contact Us</Link>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-light mx-2" type="submit">Register</button>
        <button className="btn btn-light" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
        </React.Fragment>
    );
}

export default Header;