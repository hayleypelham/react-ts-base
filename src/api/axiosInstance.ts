import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "", // API base URL
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
})

export default axiosInstance
