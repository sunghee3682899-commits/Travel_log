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
            Authorization: `Beraer ${localStorage.getItem("accessToken")}`
        }
    })
}