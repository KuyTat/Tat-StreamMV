import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="bg-gray-950">
      <Navbar></Navbar>
      <div className="w-full  bg-gray-950 ">
        \{/* contianer */}
        <div className="mt-10">
          <div
            className="
  w-full
  max-w-3xl
  mx-auto
  text-center
  px-4
  pt-8
  sm:pt-12
  md:pt-16
">
            <h2
              className="
    text-2xl
    sm:text-3xl
    md:text-4xl
    lg:text-5xl
    font-bold
    text-cyan-50
  ">
              About Tat-StreamMV
            </h2>

            <p
              className="
    mt-4
    sm:mt-6
    text-base
    sm:text-lg
    md:text-xl
    text-gray-200
  ">
              We're on a mission to bring the magic of cinema to everyone,
              everywhere. Our passion for storytelling drives everything we do.
            </p>
          </div>
        </div>
        <div
          className="
  w-full
  max-w-7xl
  mx-auto
  px-6
 
  mt-8 md:mt-12 lg:mt-20
">
          <div
            className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
    gap-6
  ">
            {/* Card */}
            <div className="bg-slate-950 rounded-2xl shadow shadow-amber-50/10 text-center p-6">
              <p className="text-red-500 text-3xl md:text-4xl font-bold">
                10K+
              </p>
              <p className="mt-3 text-amber-50 text-lg font-semibold">
                Movies & Shows
              </p>
            </div>

            {/* Card */}
            <div className="bg-slate-950 rounded-2xl shadow shadow-amber-50/10 text-center p-6">
              <p className="text-red-500 text-3xl md:text-4xl font-bold">
                50M+
              </p>
              <p className="mt-3 text-amber-50 text-lg font-semibold">
                Happy Subscribers
              </p>
            </div>

            {/* Card */}
            <div className="bg-slate-950 rounded-2xl shadow shadow-amber-50/10 text-center p-6">
              <p className="text-red-500 text-3xl md:text-4xl font-bold">
                190+
              </p>
              <p className="mt-3 text-amber-50 text-lg font-semibold">
                Countries Served
              </p>
            </div>

            {/* Card */}
            <div className="bg-slate-950 rounded-2xl shadow shadow-amber-50/10 text-center p-6">
              <p className="text-red-500 text-3xl md:text-4xl font-bold">
                24/7
              </p>
              <p className="mt-3 text-amber-50 text-lg font-semibold">
                Customer Support
              </p>
            </div>
          </div>
        </div>
        <section className="py-15" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Our Values
              </h2>
              <p className="text-slate-400 mt-3">
                The principles that guide everything we do
              </p>
            </div>

            {/* Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:-translate-y-1    hover:border-red-700 transition">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center
                        bg-gradient-to-br  bg-red-600 text-white">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  Passion for Stories
                </h3>

                <p className="text-slate-400 text-sm">
                  We believe in the power of storytelling to connect, inspire,
                  and transform lives across cultures and generations.
                </p>
              </div>

              {/* Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:-translate-y-1 hover:border-red-700 transition">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center
                        bg-gradient-to-br  bg-red-600  text-white">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  Global Access
                </h3>

                <p className="text-slate-400 text-sm">
                  Entertainment should have no borders. We're committed to
                  bringing content to audiences everywhere around the world.
                </p>
              </div>

              {/* Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:-translate-y-1  hover:border-red-700 transition">
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center
                        bg-gradient-to-br  bg-red-600  text-white">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  Innovation
                </h3>

                <p className="text-slate-400 text-sm">
                  We constantly push boundaries to deliver the best streaming
                  experience with cutting-edge technology.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-15" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="bg-gradient-to-br from-slate-950 to-slate-900 
                    border border-slate-700 
                    rounded-3xl 
                    p-10 md:p-16 
                    text-center 
                    my-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-white">
                Join Our Community
              </h2>

              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
                Be part of millions who have discovered the joy of unlimited
                entertainment. Start your journey today.
              </p>

              <Link
                to="/movie"
                className="inline-block 
                   bg-red-600 hover:bg-red-700
                   text-white font-semibold 
                   px-8 py-4 
                   rounded-xl 
                   transition">
                Start Watching
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
