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

    useEffect(() => {
        mypageMd()
        .then(res => {
            console.log("응답데이터", res.data);
            setUser(res.data)
        })
        .catch(err => console.error(err))
    },[])

    const handleChange = (e) => {
        // const {name, value}
    }

    return (
        <>
            <div className="mypage-modify-profile">
                <div className="mypage-modify-profile-inner">
                    <img src={`http://localhost:5000${user?.user_img}`}className="mypage-modify-profile-img"></img>
                    <p className="mypage-profile-text"><a href="#">프로필 이미지 변경</a></p>
                </div>
            </div>

            <div className="mypage-modify-wrap">
                <form className="mypage-modify-form">

                    <input type="text" value={user.userid} onChange={(e) => setUser({...user,userid: ""})}/>
                    <input type="text" placeholder={user.username} />
                    <input type="email" placeholder={user.email} />
                    <input type="text" placeholder={user.phone} />

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