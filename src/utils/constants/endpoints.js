const API_KEY=import.meta.env.VITE_API_KEY;

const BASE_URL="https://covid-fe-2023.vercel.app/api";

const ENDPOINTS={
    GLOBAL:`${BASE_URL}/global.json`,
    INDONESIA:`${BASE_URL}/indonesia.json`,
}

export default ENDPOINTS;