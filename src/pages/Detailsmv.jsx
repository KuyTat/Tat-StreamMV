import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { Md10K } from "react-icons/md";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const Detailsmv = () => {
  const { id } = useParams();
  const [mDetail, setDetail] = useState({});
  useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
        });
    const getMovie = localStorage.getItem("movies");
    const movie = JSON.parse(getMovie);
    console.log(movie);
    const find = movie.find((m) => m.id == id);
    console.log(find);
    setDetail(find);
    console.log(mDetail);
  }, [id]);

  return (
    <div className="bg-gray-950">
      <Navbar></Navbar>
      <section className="relative pt-20 pb-20"  data-aos="fade-up">>
        {/* backdrop */}
        <div
          className="absolute inset-x-0 top-0 h-[80vh] bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${mDetail.backdrop_path})`,
          }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-gray-950"></div>
        </div>

        <div className="relative z-10 w-4/5 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 pt-60">
            {/* poster */}
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
              <img
                src={
                  `https://image.tmdb.org/t/p/w500${mDetail.poster_path}` ||
                  "/placeholder.svg"
                }
                alt={mDetail.name}
                className="w-full h-auto"
              />
            </div>

            {/* info */}
            <div>
              {/* title */}
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
                {mDetail.name}
              </h1>

              {/* meta */}
              <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-300">
                {/* rating */}
                <span className="flex items-center gap-2 bg-gray-900 text-red-400  py-2 rounded-md font-semibold px-4">
                  ⭐ {mDetail.vote_average?.toFixed(1)}
                </span>

                <span>{mDetail.first_air_date}</span>
                <span>90MN</span>
                <span>
                  Language : {mDetail.original_language?.toUpperCase()}
                </span>
              </div>

              {/* genres */}
              {/* <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-sm text-gray-300">
                  genre
                </span>
              </div> */}

              {/* description */}
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {mDetail.overview}
              </p>

              {/* buttons */}
              <div className="flex flex-wrap gap-4 text-amber-50">
                <button className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition">
                  ▶ Watch Now
                </button>

                <button className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition">
                  🔖 Add to Watchlist
                </button>

                <button className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:bg-gray-800 rounded-lg font-semibold transition">
                  🔗 Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Detailsmv;
