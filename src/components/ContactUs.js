import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm("service_vge34ic", "contact_form", form.current, "lBV1RxaMt6Ssi7E7I")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
   
  return (
    <div className="h-screen bg-black text-white">
        
       
        
    <h1 className="text-7xl py-6  flex justify-center font-bold text-red-600 underline transition ease-in-out  hover:-translate-y-1 hover:scale-150  duration-300">
        Let's Connect
    </h1>
    
         
      
    
    <form ref={form} onSubmit={sendEmail} className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-white text-sm font-bold mb-2">Name</label>
      <input className="border rounded border-red-600 text-black"  type="text" name="user_name"/>
      <div className="w-[50%] float-right" >
        <a className="w-[50%] float-left" href="+91-6283849123">+91-6283849123</a>
        </div>
        
      </div>
     
      <div className ="mb-4">
      <label className="block text-white text-sm font-bold mb-2
      ">Email</label>
      <input className="border rounded border-red-600 text-black" type="email" name="user_email" />
      <div className="w-[50%] float-right">
               <img className="h-16 animate-pulse" src={imageOo} alt="" />
               <a className="w-[50%] float-left" href="mailto:shivam3246@gmail.com">shivam3246@gmail.com</a>
           </div>
      </div>
      <div class="mb-4">
      <label className="block text-white text-sm font-bold mb-2">Subject</label>
      <input className="border rounded border-red-600 text-black" type="text" name="user_email" />
      </div>
      <div class="mb-4">
      
    
      <label className="block text-white text-sm font-bold mb-2 " >Message
      </label>
      <textarea className="border rounded border-red-600 text-black resize" name="message" />
      </div>
      <button className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-28">
      <input type="submit" value="Send" /></button>
    </form>
    
    </div>
    
  )
}
