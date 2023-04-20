import axios from 'axios';

const api = 

    axios.create({
        baseURL: "https://api.helpme.targetbr.biz/" + "api/",
    });


export default api;