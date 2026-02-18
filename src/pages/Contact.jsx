import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import Swal from "sweetalert2";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Your message have been send 😎",
      icon: "success",
      draggable: true,
    });
    e.target.reset();
  };

  return (
    <div className="bg-gray-950">
      <Navbar></Navbar>
      <div className="w-full  bg-gray-950" data-aos="fade-up">
        {/* contianer */}
        <div className="">
          <div className="w-[80%]  m-auto pt-35 text-center p-5">
            <h2 className="text-[50px] font-bold text-cyan-50  ">Contact Us</h2>
            <p className="text-[22px] font-normal text-gray-200 mt-10 mb-5">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>
          <section className="bg-gray-950 py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* ===== Responsive Wrapper ===== */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* ================= LEFT SIDE ================= */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  {/* Item */}
                  <div className="flex items-start gap-4 text-amber-50 bg-gray-900 rounded-3xl shadow shadow-amber-50/10 p-5 sm:p-6">
                    <MdOutlineMail className="bg-red-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl p-2 shrink-0" />
                    <span>
                      <h4 className="font-bold text-lg sm:text-xl">Email Us</h4>
                      <p className="text-gray-400 text-sm sm:text-base">
                        support@cineverse.com
                      </p>
                      <p className="text-gray-400 text-sm sm:text-base">
                        press@cineverse.com
                      </p>
                    </span>
                  </div>

                  {/* Item */}
                  <div className="flex items-start gap-4 text-amber-50 bg-gray-900 rounded-3xl shadow shadow-amber-50/10 p-5 sm:p-6">
                    <FaPhoneAlt className="bg-red-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl p-2 shrink-0" />
                    <span>
                      <h4 className="font-bold text-lg sm:text-xl">Call Us</h4>
                      <p className="text-gray-400 text-sm sm:text-base">
                        +855 000 000
                      </p>
                      <p className="text-gray-400 text-sm sm:text-base">
                        Mon - Fri, 9am - 6pm
                      </p>
                    </span>
                  </div>

                  {/* Item */}
                  <div className="flex items-start gap-4 text-amber-50 bg-gray-900 rounded-3xl shadow shadow-amber-50/10 p-5 sm:p-6">
                    <MdOutlineLocationOn className="bg-red-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl p-2 shrink-0" />
                    <span>
                      <h4 className="font-bold text-lg sm:text-xl">Visit Us</h4>
                      <p className="text-gray-400 text-sm sm:text-base">
                        123 Cinema Boulevard
                      </p>
                      <p className="text-gray-400 text-sm sm:text-base">
                        Battambang
                      </p>
                    </span>
                  </div>

                  {/* Item */}
                  <div className="flex items-start gap-4 text-amber-50 bg-gray-900 rounded-3xl shadow shadow-amber-50/10 p-5 sm:p-6">
                    <CiClock2 className="bg-red-500 w-10 h-10 sm:w-12 sm:h-12 rounded-xl p-2 shrink-0" />
                    <span>
                      <h4 className="font-bold text-lg sm:text-xl">
                        Business Hours
                      </h4>
                      <p className="text-gray-400 text-sm sm:text-base">
                        Monday - Friday: 9am - 6pm
                      </p>
                      <p className="text-gray-400 text-sm sm:text-base">
                        Saturday - Sunday: Closed
                      </p>
                    </span>
                  </div>
                </div>

                {/* ================= RIGHT SIDE ================= */}
                <div className="w-full lg:w-1/2 bg-gray-900 rounded-3xl shadow shadow-amber-50/10 p-5 sm:p-6 xl:p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-xl sm:text-2xl text-amber-50 font-bold">
                      Send us a Message
                    </h2>

                    {/* Name */}
                    <div>
                      <label className="text-amber-50 font-semibold block mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Tat"
                        className="w-full py-3 px-3 bg-gray-800 rounded-xl text-amber-50 placeholder:text-amber-50/70"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-amber-50 font-semibold block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="tat@gmail.com"
                        className="w-full py-3 px-3 bg-gray-800 rounded-xl text-amber-50 placeholder:text-amber-50/70"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-amber-50 font-semibold block mb-2">
                        Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Type your message here..."
                        className="w-full py-3 px-3 bg-gray-800 rounded-xl text-amber-50 placeholder:text-amber-50/70"
                      />
                    </div>

                    <button
                      type="submit"
                      className="
              w-full sm:w-auto
              py-3 px-6
              bg-red-600 hover:bg-red-700
              text-white font-semibold
              rounded-xl
              transition
            ">
                      Submit Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20" data-aos="fade-up">
            <div className="max-w-7xl mx-auto px-6">
              {/* Header */}
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Frequently Asked Questions
                </h2>
                <p className="text-slate-400 mt-3">
                  Quick answers to common questions
                </p>
              </div>

              {/* Grid */}
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:-translate-y-1    hover:border-red-700 transition">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    How do I start my free trial?
                  </h3>

                  <p className="text-slate-400 text-sm">
                    Simply click "Start Watching" and create an account. Your
                    30-day free trial begins immediately with full access to all
                    content.
                  </p>
                </div>

                {/* Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:-translate-y-1 hover:border-red-700 transition">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Can I cancel anytime?
                  </h3>

                  <p className="text-slate-400 text-sm">
                    Yes! There are no contracts or commitments. You can cancel
                    your subscription at any time from your account settings.
                  </p>
                </div>

                {/* Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:-translate-y-1  hover:border-red-700 transition">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    What devices are supported?
                  </h3>

                  <p className="text-slate-400 text-sm">
                    CineVerse works on all major devices including smart TVs,
                    phones, tablets, gaming consoles, and web browsers.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
