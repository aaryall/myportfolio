import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios";
import Swal from 'sweetalert2'
import toast from 'react-hot-toast';
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message
    }
    try {
      await axios.post("https://getform.io/f/aroyvgob", userInfo)
      toast.success("Your message has been sent.");
      //alert('Your message has been sent');
      reset();
    } catch (error) {
      console.log(error.message);
      toast.error("Something went wrong");
    }
  }
  return (
    <>
        <hr/>
        <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
            
                <h1 className="text-3xl font-bold mb-5">Contact me</h1>
                <span>Please fill out form below to contact me.</span>
            
            <div className='flex flex-col items-center mt-6'>
                <form  onSubmit={handleSubmit(onSubmit)} method="POST" className='bg-slate-200 w-auto md:w-96 px-8 py-6 rounded-xl'>
                    <h1 className='text-xl font-semibold'>Send Your Message</h1>
                    <div className='flex flex-col  my-4'>
                            <label className='block text-gray-700'>Full Name</label>
                                <input {...register("name", { required: true })}
                                name='name' id='name' className='shadow appearance-none border border-gray-300 rounded py-2 px-3 bg-white focus-outline-none focus:shadow-gray-700 mb-4' 
                                type='text' placeholder='Enter your fullname' re/>
                                  {errors.name && <span>This field is required</span>}


                            <label className='block text-gray-700'>Email Address</label>
                            <input {...register("email", { required: true })} name='email' id='email' className='shadow appearance-none border border-gray-300 rounded py-2 px-3 bg-white focus-outline-none focus:shadow-gray-700 mb-4' 
                            type='email' placeholder='Enter your email address'/>
                              {errors.email && <span>This field is required</span>}



                            <label className='block text-gray-700'>Message</label>
                            <textarea {...register("message", { required: true })} name='message' id='message' className='shadow appearance-none border border-gray-300 rounded py-2 px-3 bg-white  focus-outline-none focus:shadow-gray-700 mb-4' type='text' 
                            placeholder='Enter your message'/>
                            {errors.message && <span>This field is required</span>}
                    </div>
                    <button type='submit' className='bg-black w-20 text-white rounded-xl px-3 py-2 hover:bg-slate-700 shadow-md p-1 cursor-pointer hover:scale-110'>Send</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact
