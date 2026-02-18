import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Card from "../components/card";
const Home = () => {
  const [movie, setMovie] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWNjZjkxZjkwMTFlMjdjZWE4NzRlODdiNWQwYWFjNCIsIm5iZiI6MTc2NjU0OTgyNy41MjE5OTk4LCJzdWIiOiI2OTRiNjk0M2VhNDA0MzkzNmYyZmNjYzAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KdkEE2GYpBfgVxvRpnefGg3-slyIkHB57LDXjRwGHxA",
    },
  };
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
        options,
      )
      .then((res) => {
        setMovie(res.data.results);
        console.log(res.data.results);
      });
  }, []);
  return (
    <div>
      <Navbar className=" "></Navbar>
      <div className="w-full mx-auto bg-gray-950">
        <section
          className=" relative lg:h-screen flex-col items-center pt-20 overflow-hidden "
          data-aos="fade-up">
          {/* background gradients */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-red-900/5 via-transparent to-transparent" />
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />

          <div className="w-3/4 container mx-auto px-4 relative z-10 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* LEFT */}
              <div className="max-w-xl">
                {/* badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-sm mb-6">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  #1 Streaming Platform
                </div>

                {/* title */}
                <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-amber-50">
                  Unlimited <span className="text-red-500">Movies</span>, TV
                  Shows & More
                </h1>

                {/* description */}
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Stream thousands of movies and TV shows. Watch anywhere,
                  anytime. Start your free trial today and discover your next
                  favorite story.
                </p>

                {/* buttons */}
                <div className="flex flex-col sm:flex-row gap-4 text-amber-50 font-medium">
                  <Link
                    to="/movie"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 hover:scale-105 transition font-semibold">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Start Watching
                  </Link>

                  <Link
                    to="/about"
                    className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-800 hover:scale-105 transition text-center">
                    Learn More
                  </Link>
                </div>

                {/* stats */}
                <div className="flex flex-col sm:flex-row gap-8 mt-5 pt-3 border-t border-gray-800">
                  <div>
                    <h3 className="text-3xl font-bold text-red-500">10K+</h3>
                    <p className="text-gray-400 text-sm">Movies & Shows</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-red-500">4K</h3>
                    <p className="text-gray-400 text-sm">Ultra HD Quality</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-red-500">24/7</h3>
                    <p className="text-gray-400 text-sm">Support Available</p>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative order-first lg:order-last">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={
                      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop"
                    }
                    className="w-full h-[420px] sm:h-[520px] object-cover"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="text-gray-400 text-md pb-2">
                      Founded in 2026, Tat-StreamMv started with a simple idea:
                      everyone deserves access to great entertainment. What
                      began as a small streaming service has grown into a global
                      platform loved by millions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          data-aos="fade-up"
          className="w-4/5 m-auto flex-col gap-5 items-center mt-5 bg-gray-950">
          <div className="w-full flex justify-between">
            <h2 className="text-amber-50 font-bold mb-10 mt-10 text-3xl">
              All Movies
            </h2>
            <Link
              to="/movie"
              className="text-red-600 font-bold mb-10 mt-10 text-xl underline underline-offset-4">
              See More
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 ">
            {/* card */}
            {movie.slice(0, 4).map((m) => (
              <Card
                key={m.id}
                id={m.id}
                title={m.name}
                image={m.backdrop_path}
                rate={m.vote_average}></Card>
            ))}
          </div>
        </div>
        <section className="py-5 pt-9" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Why Choose CineVerse?
              </h2>
              <p className="text-slate-400 mt-3">
                The best streaming experience you can find
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
                  4K Ultra HD
                </h3>

                <p className="text-slate-400 text-sm">
                  Experience movies in stunning 4K resolution with HDR support
                  for the ultimate viewing experience.
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
                  Download & Watch
                </h3>

                <p className="text-slate-400 text-sm">
                  Download your favorite movies and watch them offline,
                  anywhere, anytime without internet.
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
                  Family Sharing
                </h3>

                <p className="text-slate-400 text-sm">
                  Create up to 5 profiles for family members with personalized
                  recommendations for each.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className=" py-2 lg:py-20 sm:py-5 md:py-8" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="bg-gradient-to-br from-slate-950 to-slate-900 
                    border border-slate-700 
                    rounded-3xl 
                    p-10 md:p-16 
                    text-center 
                    my-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-white">
                Ready to Start Watching?
              </h2>

              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
                Join millions of viewers worldwide. Start your free 30-day trial
                today. No commitment, cancel anytime.
              </p>

              <Link
                to="/movie"
                className="inline-block 
                   bg-red-600 hover:bg-red-700
                   text-white font-semibold 
                   px-8 py-4 
                   rounded-xl 
                   transition">
                Get Started Free
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
