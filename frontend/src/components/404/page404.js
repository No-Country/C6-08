import React from 'react'
import './p404.css'

const Page404 = () => {
  return (
    <div className="p404-container">
      <h2>
        <span className="p404">404</span>
        <p>Lo sentimos... la página que buscas no existe</p>
      </h2>

      <a href="/" className="">
        Llévame al home 🚀
      </a>
      
    </div>
  );
}

export default Page404