import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 3000,
})

// axiosInstance.interceptors.request.use(
//     (config) => {
//         // const token = store.get
//     }
// )

export default axiosInstance;