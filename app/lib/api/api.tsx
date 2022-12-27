import axios from "axios";

export async function getRemixtaPost() {
    const response = await axios.get('http://localhost:4000/remixta');
    return response.data;
}

export async function getStory(id: number) {
    const response = await axios.get(`http://localhost:4000/remixta/${id}`);
    return response.data;
}

export async function getUserInfo() {
    const response = await axios.get('http://localhost:4000/userInfo');
    return response.data;
}