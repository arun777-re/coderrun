import React from 'react'

const ContactFormSection = () => {
  return (
<section className="bg-black text-white py-20">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    
    <div>
      <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
      <p className="text-gray-400 mb-8">
        Have a project in mind? Or just want to say hi?  
        Fill out the form and we’ll get back to you soon.
      </p>
      {/* contact info cards */}
      <ul className="space-y-3">
        <li>📞 +91 98765 43210</li>
        <li>📧 contact@coderrun.info</li>
        <li>📍 Chandigarh, India</li>
      </ul>
    </div>

    {/* contact form */}
    <form className="space-y-5 bg-[#111] p-8 rounded-2xl border border-white/10">
      <input type="text" placeholder="Name" className="w-full p-3 rounded bg-transparent border border-white/20" />
      <input type="email" placeholder="Email" className="w-full p-3 rounded bg-transparent border border-white/20" />
      <textarea rows={5} placeholder="Message" className="w-full p-3 rounded bg-transparent border border-white/20"></textarea>
      <button className="bg-accent text-white py-3 px-6 rounded hover:bg-accent/80 transition">
        Send Message
      </button>
    </form>
  </div>
</section>

  )
}

export default ContactFormSection