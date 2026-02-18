import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ id, title, image, rate }) => {
  return (
    <Link to={`/Detailsmv/${id}`}>
      <div>
        <div className="w-full h-70 md:h-85 lg:h-100 bg-slate-950 shadow-sm shadow-amber-50/10 rounded-xl overflow-hidden hover:border-2  hover:border-red-700  hover:scale-102 transition-all duration-200">
          <img
            className="w-full h-[75%] lg:h-[82%] object-fill "
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt=""
          />
          <div className="px-4 text-amber-50 mt-2">
            <p className="font-bold text-xl mb-1 line-clamp-1">{title}</p>
            {/* <p className="text-sm">DESC</p> */}
            <span className="flex gap-2 items-center">
              <span>
                <FaStar />
              </span>
              <span>{rate?.toFixed(1)}</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
