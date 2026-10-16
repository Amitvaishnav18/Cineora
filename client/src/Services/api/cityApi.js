import api from '../../config/api'

export const getCities = async (letter = "") => {
  return await api.get("/cities",{
    params: letter ? {letter} : {},
  });
}

export const searchCities = async (query)=>{
  return await api.get("/cities",{
    params : {q : query},
  });
}

export const getPopularCities = async () => {
  return await api.get("/cities/popular");
};