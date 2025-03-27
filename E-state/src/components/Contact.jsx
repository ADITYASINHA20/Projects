import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "60cb11c5-e01b-4c70-9754-98f3b9c96a4a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      toast.success("Thank you! Your form has been submitted successfully ✅", { autoClose: 3000 }); // ✅ Success Toast
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error("Something went wrong ❌ Please try again!", { autoClose: 3000 }); // ✅ Error Toast
    }
  };

  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
        Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span>
      </h1>
      <p className='mb-6'>Ready to Make a Move? Let's Build Your Future Together</p>

      {/* Contact Form */}
      <form onSubmit={onSubmit} className='max-w-4xl mx-auto'>
        {/* Name & Email */}
        <div className='flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4'>
          <div className='w-full text-left'>
            <label className='block mb-2'>Your Name</label>
            <input
              className='w-full border border-gray-300 rounded py-3 px-4'
              type='text'
              name='Name'
              placeholder='Your Name'
              required
            />
          </div>
          <div className='w-full text-left'>
            <label className='block mb-2'>Your Email</label>
            <input
              className='w-full border border-gray-300 rounded py-3 px-4'
              type='email'
              name='Email'
              placeholder='Your Email'
              required
            />
          </div>
        </div>

        {/* Message Box */}
        <div className='w-full text-left mb-4'>
          <label className='block mb-2'>Your Message</label>
          <textarea
            className='w-full border border-gray-300 rounded py-3 px-4 h-40 resize-none'
            name='Message'
            placeholder='Write your message...'
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className='text-center'>
          <button
            type='submit'
            className='bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition'
          >
            Submit
          </button>
        </div>
      </form>

      {/* Toast Container */}
      <ToastContainer position='top-center' /> {/* ✅ Toast Container */}
    </div>
  )
}

export default Contact;
