import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../components/Card";

const Detailsmv = () => {
  const { id } = useParams();

  const [mDetail, setDetail] = useState(null);
  const [mv, setMv] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    const getMovie = localStorage.getItem("movies");
    const movie = getMovie ? JSON.parse(getMovie) : [];

    setMv(movie);

    const findMovie = movie.find((m) => m.id === Number(id));
    setDetail(findMovie || null);
  }, [id]);

  // Loading state
  if (!mDetail) {
    return (
      <div className="bg-gray-950 min-h-screen flex justify-center items-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-950">
      <Navbar />

      <section className="relative pt-20 pb-20" data-aos="fade-up">
        {/* Backdrop */}
        <div
          className="absolute inset-x-0 top-0 h-[80vh] bg-cover bg-center z-0"
          style={{
            backgroundImage: mDetail.backdrop_path
              ? `url(https://image.tmdb.org/t/p/w500${mDetail.backdrop_path})`
              : "none",
          }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-gray-950"></div>
        </div>

        <div className="relative z-10 w-4/5 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 pt-60">
            {/* Poster */}
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
              <img
                src={
                  mDetail.poster_path
                    ? `https://image.tmdb.org/t/p/w500${mDetail.poster_path}`
                    : "/placeholder.svg"
                }
                alt={mDetail.name}
                className="w-full h-auto"
              />
            </div>

            {/* Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
                {mDetail.name}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-300">
                <span className="flex items-center gap-2 bg-gray-900 text-red-400 py-2 rounded-md font-semibold px-4">
                  ⭐ {mDetail.vote_average?.toFixed(1)}
                </span>

                <span>{mDetail.first_air_date || "N/A"}</span>
                <span>90MN</span>
                <span>
                  Language : {mDetail.original_language?.toUpperCase() || "N/A"}
                </span>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {mDetail.overview || "No description available."}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 text-amber-50">
                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition">
                  ▶ Watch Now
                </button>

                <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition">
                  🔖 Add to Watchlist
                </button>

                <button className="px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg font-semibold transition">
                  🔗 Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Movies */}
      <div
        data-aos="fade-up"
        className="w-4/5 m-auto flex-col gap-5 items-center mt-5 bg-gray-950 mb-10">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-amber-50 font-bold mb-10 mt-10 text-3xl">
            Popular Movie
          </h2>

          <Link
            to="/movie"
            className="text-red-600 font-bold mb-10 mt-10 text-xl underline underline-offset-4">
            See More
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mv.slice(5, 9).map((m) => (
            <Card
              key={m.id}
              id={m.id}
              title={m.name}
              image={m.backdrop_path}
              rate={m.vote_average}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Detailsmv;
