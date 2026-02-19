import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWNjZjkxZjkwMTFlMjdjZWE4NzRlODdiNWQwYWFjNCIsIm5iZiI6MTc2NjU0OTgyNy41MjE5OTk4LCJzdWIiOiI2OTRiNjk0M2VhNDA0MzkzNmYyZmNjYzAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KdkEE2GYpBfgVxvRpnefGg3-slyIkHB57LDXjRwGHxA",
    },
  };
  useEffect(() => {
    if (page > 1) {
      movieTopRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    AOS.init({
      duration: 800,
      once: true,
    });
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`,
        options,
      )
      .then((res) => {
        setMovie(res.data.results);
        localStorage.setItem("movies", JSON.stringify(res.data.results));
        console.log(res.data.results);
      });
  }, [page]);
  const filteredMovies = movie.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()),
  );
  const movieTopRef = useRef(null);

  return (
    <div className="bg-gray-950   " ref={movieTopRef}>
      <Navbar></Navbar>
      <div className="w-full  bg-gray-950 mb-20">
        \{/* contianer */}
        <div className="" data-aos="fade-up">
          <div className="w-[70%] md:w-[50%] lg:w-2/5   m-auto mt-25 text-center p-5  mb-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cyan-50  ">
              Browse Movies
            </h2>
            <p className="text-sm md:text-md lg:text-xl font-normal text-gray-200 mt-3 md:mt-5 lg:mt-10">
              Discover thousands of movies from every genre. Find your next
              favorite film.
            </p>
          </div>
          <div className="w-4/5 m-auto flex gap-5 items-center mt-5 ">
            <input
              className="w-[90%] bg-gray-900  text-amber-50 px-2 h-10 md:px-4 md:h-12 lg:px-6  lg:h-15  rounded-md  placeholder:text-md lg:placeholder:text-xl placeholder:text-amber-50/60"
              type="text"
              placeholder="Search movies ....."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className=" px-4 py-2 md:px5 md:py-3 lg:px-6 lg:py-4 bg-red-700 rounded-sm text-amber-50">
              Search
            </button>
          </div>
          <div className="w-4/5 m-auto flex-col gap-5 items-center mt-5 bg-gray-950">
            <h2 className="text-amber-50 font-bold mb-10 mt-10 text-3xl">
              All Movies
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
              {/* card */}
              {filteredMovies && filteredMovies.length > 0 ? (
                filteredMovies.map((m) => (
                  <Card
                    key={m.id}
                    id={m.id}
                    title={m.name}
                    image={m.backdrop_path}
                    rate={m.vote_average}
                  />
                ))
              ) : (
                <h1 className="col-span-4 text-center text-gray-400 text-2xl font-bold py-10">
                  Movie not found
                </h1>
              )}
            </div>
          </div>
          <div className=" w-[80%] flex justify-between  m-auto mt-5 pb-5 text-amber-50">
            <button
              onClick={() => {
                setPage((prev) => Math.max(1, prev - 1));
                movieTopRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="items-center  text-sm md:text-md lg:text-xl flex px-4 md:px5 lg:px-8 py-1.5 md:py-2 lg:py-3 bg-red-600 rounded-2xl font-semibold text-md hover:blue-red-700 transition-all duration-100 ">
              <IoIosArrowBack className="text-xl  lg:text-2xl" />
              Back
            </button>
            <button
              onClick={() => {
                setPage((prev) => prev + 1);
                movieTopRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className=" text-sm md:text-md lg:text-xl flex px-4 md:px5 lg:px-8 py-1.5 md:py-2 lg:py-3 bg-red-600  rounded-2xl font-semibold text-md hover:blue-red-700 transition-all duration-100 items-center">
              Next <IoIosArrowForward className="text-xl  lg:text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Movie;
