import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_jzub3os',    // replace with your EmailJS Service ID
        'template_vjb6xa3',   // replace with your Template ID
        form.current,
        'WYDRK_YHsYGm32xQE'     // replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('✅ Message sent:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('❌ Error:', error.text);
          alert('Failed to send message.');
        }
      );

    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold">Contact Me</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200">
                  <Mail size={24} className="text-blue-400" />
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href="mailto:skml.ch500@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                      skml.ch500@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200">
                  <Phone size={24} className="text-green-400" />
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a href="tel:+91 8008599269" className="text-white hover:text-green-400 transition-colors">
                      +91 8008599269
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200">
                  <MapPin size={24} className="text-purple-400" />
                  <div>
                    <p className="text-gray-300 text-sm">Location</p>
                    <p className="text-white">Current Location at Bachupally,Hyderabad
                      (Flexible to Work at any Location)</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a

                    href="https://www.linkedin.com/in/cherala-sai-kamal-226935320/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                  >
                    <Linkedin size={20} className="text-white" />
                  </a>
                  <a
                    href="https://github.com/kamalcherala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <input
                  type="hidden"
                  name="timestamp"
                  value={new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;