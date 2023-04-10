import axios from "axios";
// const TUITS_API = "http://localhost:4000/api/tuits";
// const TUITS_API = "https://tuiter-node-server-app-cw2z.onrender.com/api/tuits";
// const TUITS_API = "https://tuiter-node-server-app-p9sy.onrender.com/api/tuits";

const API_BASE = process.env.REACT_APP_API_BASE; //http://localhost:4000/api
const TUITS_API = `${API_BASE}/tuits`;

export const findTuits = async () => {
  const response = await axios.get(TUITS_API);
  const tuits = response.data;
  console.log(response);
  return tuits;
};

export const createTuit = async (tuit) => {
  const response = await axios.post(TUITS_API, tuit);
  return response.data;
};

export const deleteTuit = async (tid) => {
  const response = await axios.delete(`${TUITS_API}/${tid}`);
  return response.data;
};

export const updateTuit = async (tuit) => {
  const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
  return response;
};
