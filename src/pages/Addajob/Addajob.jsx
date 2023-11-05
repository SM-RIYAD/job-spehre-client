import React, { useState } from 'react';
import { useContext } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { AuthContext } from '../../providers/AuthProvider';
import BannerAddajob from './BannerAddajob';
const Addajob = () => {
    const { user, logOut } = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState('OnSite'); // Initial selected option
    const [startDate, setStartDate] = useState(new Date());

    const [postingStartDate, setPostingStartDate] = useState(new Date());
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
    
        const photo = form.photo.value;
        const date = form.date.value;
        const price = form.price.value;
        const rating = form.rating.value;
    
        if(rating>5){
    console.log("sd");
    // errorToast("Rating should be less than 5");
    return;
        }else{
    
          const description = form.description.value;
          const type = form.type.value;
          const brand = form.brandName.value;
      
          const newProduct = {
            name,
            brand,
            date,
            price,
            rating,
            description,
            type,
            photo,
          };
      
          console.log(" added product is  ", newProduct);
          ///sending product to server
        //   fetch("https://brand-website-server.vercel.app/addproduct", {
        //     method: "POST",
        //     headers: {
        //       "content-type": "application/json",
        //     },
        //     body: JSON.stringify(newProduct),
        //   })
        //     .then((res) => res.json())
        //     .then((data) => {
        //       console.log(data);
        //       if (data.insertedId) {
        //         Swal.fire({
        //           title: "Success!",
        //           text: "Product Added Successfully",
        //           icon: "success",
        //           confirmButtonText: "Cool",
        //         });
        //       }
        //     });
    
        }
      
      };
    return (
      <div> 
        <BannerAddajob/>
        
        <div className='lg:max-w-6xl mx-auto'>
      <div className="min-h-screen px-5">

<ToastContainer />

<div className="lg:max-w-6xl   mx-auto  rounded-xl shadow-xl">

 <form onSubmit={handleAddProduct} className="card-body border ">
   <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
     
       <div className="form-control">
         <label className="label">
           <span className="label-text text-black">Job title</span>
         </label>
         <input
           type="text"
           name="name"
           placeholder="Enter your job title"
           className="input input-bordered"
           required
         />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text text-black" > Job Type</span>
         </label>
         <select  className="input input-bordered" value={selectedOption} onChange={handleSelectChange}>
      <option value="On Site">On Site</option>
      <option value="Remote">Remote</option>
      <option value="Part Time">Part Time</option>
      <option value="Hybrid">Hybrid</option>
    </select>
       </div>
       <div className="form-control lg:col-span-2">
         <label className="label">
           <span className="label-text text-black">Job description</span>
         </label>
     
         <textarea className="input input-bordered "   required  placeholder="Enter Job Description" name="description" id="" cols="30" rows="10"></textarea>
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text text-black">Photo Url</span>
         </label>
         <input
           type="photo"
           name="photo"
           placeholder="enter photo url"
           className="input input-bordered"
           required
         />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text text-black">ApplicantsNumber</span>
         </label>
         <input
           type="number"
           name="ApplicantsNumber"
           placeholder="ApplicantsNumber"
           className="input input-bordered"
           required
         />
       </div>
  
    
     
       <div className="form-control">
         <label className="label">
           <span className="label-text text-black">User Name</span>
         </label>
         <input
           type="text"
           name="username"
           value={user?.displayName}
           placeholder="User Name"
           className="input input-bordered"
           required
         />
       </div>

       <div className="form-control">
         <label className="label">
           <span className="label-text text-black">Salary Range</span>
         </label>
         <input
           type="text"
           name="salary"
           placeholder="salary range eg. 2000-5000"
           className="input input-bordered"
           required
         />
      
       </div>
       
       <div className="form-control">
         <label className="label">
           <span className="label-text text-black">Posting Date</span>
         </label>
         {/* <input
           type="date"
           name="postingdate"
           placeholder="enter the date of posting"
           className="input input-bordered"
           required
         />  */}

<DatePicker  className="input postingDate input-bordered deadline w-full" selected={startDate} onChange={(date) => setPostingStartDate(date)} />
       </div>

       <div className="form-control">
         <label className="label">
           <span className="label-text text-black"> Application Deadline</span>
         </label>
         <DatePicker  className="input input-bordered deadline w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
       </div>
      
    
     
   </div>
   <input type="submit" value="Add Job" className="btn btn-block btn-primary" />
 </form>
</div>
</div>
    </div></div>
       
    );
};

export default Addajob;