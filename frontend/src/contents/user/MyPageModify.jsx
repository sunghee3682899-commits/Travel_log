import React, { useEffect, useState } from 'react'
import "./MyPageModify.css"
import { mypageMd } from '../../API/user'
import { Link, useNavigate } from 'react-router-dom'


const MyPageModify = () => {
    const [user, setUser] = useState({
        userid: "",
        username:"",
        email:"",
        phone:"",
    })
    const navigate = useNavigate();
    const cancel = ()=>{
        const ok = window.confirm("정말 취소 하시겠습니까?\n 작성한 내용은 저장되지 않습니다.")

        if (ok) {
            navigate("/")
        }
    }

    const [imageFile, setImageFile] = useState(null)
    const [preview , setPreview] = useState(null)
    const imageChange = (e) => {
        const file = e.target.files[0]
        if(!file) return
        
        setImageFile(file)
        setPreview(URL.createObjectURL(file))
    }

    useEffect(() => {
        mypageMd()
        .then(res => {
            console.log("응답데이터", res.data);
            setUser(res.data)
        })
        .catch(err => console.error(err))
    },[])

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const clearOnFocus = (field) => {
        setUser(prev => ({
            ...prev,
            [field]: ""
        }))
    }

    


    return (
        <>
            <div className="mypage-modify-profile">
                <la className="mypage-modify-profile-inner">
                    <img src={
                        preview
                            ? preview
                            :`http://localhost:5000${user?.user_img}`}
                            className="mypage-modify-profile-img"></img>
                    <label className="mypage-profile-text">프로필 이미지 변경
                        <input type='file' accept='image/*' onChange={imageChange} hidden /></label>
                </la>
            </div>

            <div className="mypage-modify-wrap">
                <form className="mypage-modify-form">

                    <input type="text" name="userid" value={user.userid} onFocus={()=> clearOnFocus("userid")} onChange={handleChange} />
                    <input type="text" name="username" value={user.username} onFocus={()=> clearOnFocus("username")} onChange={handleChange} />
                    <input type="email" name="email" value={user.email} onFocus={()=> clearOnFocus("email")} onChange={handleChange} />
                    <input type="text" name="phone" value={user.phone} onFocus={()=> clearOnFocus("phone")} onChange={handleChange} />

                    <div className="mypage-btn-group">
                        <button type="submit">수정</button>
                        <button type="button" onClick={cancel}>취소</button>
                        <button type="submit">삭제</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default MyPageModify