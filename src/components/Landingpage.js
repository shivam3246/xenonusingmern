import React from 'react'
import imageone from "./images.jpg"
import imagetwo from "./images (1).jpg"
import imagethree from "./images (2).jpg"
function Landingpage() {
  return (
    <div>
      <div className='text-bg-dark p-3'><h1>Car Sales</h1></div>
       <ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link active link-info"  href="/"><h3>Sign Up</h3></a>
  </li>
  <li className="nav-item">
    <a className="nav-link active link-info" href="/"><h3>Contact Us</h3></a>
  </li>
 </ul>
 <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imageone} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={imagetwo} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={imagethree} class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>

    </div>
  )
}

export default Landingpage