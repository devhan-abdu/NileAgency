'use client'
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from 'sonner';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name || formData.name.trim() === "") {
      newErrors.name = "Name is required.";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }

    if (!formData.email || formData.email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!formData.subject || formData.subject.trim() === "") {
      newErrors.subject = "Subject is required.";
    } else if (formData.subject.length < 5 || formData.subject.length > 100) {
      newErrors.subject = "Subject must be between 5 and 100 characters.";
    }
    if (!formData.message || formData.message.trim() === "") {
      newErrors.message = "Message is required.";
    } else if (formData.message.length < 20 || formData.message.length > 1000) {
      newErrors.subject = "Message must be between 20 and 1000 characters";
    }
    if (!formData.phoneNumber || formData.phoneNumber.trim() === "") {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\+?[0-9\s\-]{7,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number f";
    }
    setErrors(newErrors)

    return !Object.keys(newErrors).length > 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    if (validateForm()) {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await res.json()
      if (!result.success) {
        toast.error('Failed to submit');
        setIsSubmitting(false);

      } 
      else {
        toast.success('Message sent!');
        setIsSubmitting(false)
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          subject: "",
          message: "",
        });        
      }

    }

  };

  return (
    <div className="py-10 md:py-14  font-poppins">
      <p className="text-center mb-1 ">contact us</p>
      <h2 className="text-3xl lg:text-4xl leading-[1.1] font-bold mb-4 capitalize text-center font-montserrat">
        GET IN TOUCH WITH US
      </h2>
      <p className="text-foreground-500/80 text-center max-w-[500px] mx-auto text-sm">
        Every great partnership begins with a conversation — let’s connect and build something exceptional together
      </p>
      <div className="flex flex-col md:flex-row place-content-center items-start gap-12  mt-12 md:mt-20">
        <form action="" className=" flex flex-col gap-6 md:w-1/2 w-full" onSubmit={handleSubmit}>
          <input type="text" id="name" value={formData.name} onChange={handleChange} className=" px-3  py-2  border-b border-foreground-500/60  placeholder:text-foreground-500/60  outline-none" placeholder="your name" />
          {errors.name && <p className='mt1 text-sm text-red-600'>{errors.name}</p>}
          <input type="email" id="email" value={formData.email} onChange={handleChange} className=" px-3  py-2  border-b  outline-none border-foreground-500/60  placeholder:text-foreground-500/60 " placeholder="Email address" />
          {errors.email && <p className='mt1 text-sm text-red-600'>{errors.email}</p>}
          <input type="tel" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className=" px-3  py-2  border-b  outline-none border-foreground-500/60  placeholder:text-foreground-500/60 " placeholder="Phone number" />
          {errors.phoneNumber && <p className='mt1 text-sm text-red-600'>{errors.phoneNumber}</p>}
          <input type="text" id="subject" value={formData.subject} onChange={handleChange} className=" px-3  py-2  border-b  outline-none border-foreground-500/60  placeholder:text-foreground-500/60 " placeholder="Subject" />
          {errors.subject && <p className='mt1 text-sm text-red-600'>{errors.subject}</p>}
          <textarea name="message" rows={4} id="message" value={formData.message} onChange={handleChange} className="mt-2 px-3 py-2 rounded-md span-col-2 border border-foreground-500/60  placeholder:text-foreground-500/60 outline-none text-gray-200 focus:outline-ring-1 focus:outline-ring-gray-300 placeholder:text-foreground-500/80 col-span-2 min-h-24" placeholder="Message" />
          {errors.message && <p className='mt1 text-sm text-red-600'>{errors.message}</p>}
          <Button disabled={isSubmitting} className='rounded-md px-6 py-3 cursor-pointer  w-max self-start md:self-end text-black font-bold'>Send Message</Button>
        </form>
        <div className="space-y-4 bg-[#202020] rounded-xl shadow-xl px-6 p-6 w-max h-max">
          <h6 className="text-xl capitalize font-bold text-center">Contact Info</h6>
          <div className="space-y-2">
            <div className="inline-flex gap-2 items-center">
              <h6 className="text-md font-semibold">Phone Number</h6>
            </div>
            <p className="ml-8 mb-1 text-sm text-foreground-500/90">+25195234125</p>
            <p className="ml-8 text-sm text-foreground-500/90">+251743567212</p>
          </div>

          <div className="space-y-2">
            <div className="inline-flex gap-2 items-center">
              <h6 className="text-md font-semibold">Email</h6>
            </div>
            <p className="ml-8 mb-1 text-sm text-foreground-500/90">nileagency12@gmail.com</p>
            <p className="ml-8 text-sm text-foreground-500/90">nileagencyhan@gmail.com</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;
