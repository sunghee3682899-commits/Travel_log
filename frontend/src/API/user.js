import apiClient from "./axios";

export const mypage = () => {
    return apiClient.get("/api/mypage",{
        headers:{
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
}

export const mypageMd = () =>{
    return apiClient.get("/api/mypagemodify",{
        headers:{
            Authorization: `Berer ${localStorage.getItem("accessToken")}`
        }
    })
}

export const mypageUpdate = (formData) => {
    apiClient.put("/api/mypagemodify", formData)
}

export const mypageDelete = () =>{
    apiClient.delete("api/mypagemodify")
}