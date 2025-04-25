

import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { WeddingPlanners } from "../pages/Weddingplanners/wedplanassets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [venues, setVenues] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [userData, setUserData] = useState(null);
  const [favorites, setFavorites] = useState({}); // key = venue._id, value = true


  // Fetch all venues
  const getVenuesData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/venue/list`);
      if (data.success) {
        setVenues(data.venues);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Load profile of the logged-in user
  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // Load venues on mount
  useEffect(() => {
    getVenuesData();
  }, []);

  // Save token and fetch profile on login
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      loadUserProfileData();
    } else {
      localStorage.removeItem("token");
      setUserData(null);
    }
  }, [token]);

  const value = {
    venues,
    getVenuesData,
    WeddingPlanners,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData,
    favorites,
    setFavorites,
  };
  console.log(userData)

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
