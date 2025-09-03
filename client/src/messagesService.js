import axios from 'axios'

export const postMessage = async (contactForm) => {
    console.log("contactform", contactForm)
    const response = await axios.post(`${import.meta.env.VITE_API_SERVER_URL}/messages`, contactForm)
    console.log("response", response.data)
    return response.data

}