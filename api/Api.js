import axios from "axios";

const api = axios.create({
    baseURL:'shoponlain.herokuapp.com/'
});
export default api