import React, { useContext } from "react";
import { AppContext } from "../Context/appcontext";
import { useNavigate } from "react-router-dom";
import red from './Venuefile/redHeart.jpg';

const FavouritesPage = () => {
  const { venues, favorites } = useContext(AppContext);
  const navigate = useNavigate();

  const favVenues = venues.filter(venue => favorites[venue._id]);

  return (
    <div className="ml-28 mt-32">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Favourite Venues</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-6 px-4 sm:px-8 md:px-16 lg:px-20">
        {favVenues.length === 0 ? (
          <p className="text-gray-500">No favourites yet.</p>
        ) : (
          favVenues.map((venue) => (
            <div
              key={venue._id}
              onClick={() => navigate(`/venue-booking-hall/${venue._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-center text-sm gap-2 text-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p>Available</p>
                </div>
                <p className="text-center font-semibold text-lg text-gray-900 font-medium">{venue.name}</p>
                <p className="text-center text-gray-600 text-sm">{venue.city}</p>
                <img className="h-6 mx-auto mt-2" src={red} alt="fav" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavouritesPage;
