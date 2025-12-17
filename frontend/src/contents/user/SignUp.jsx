// import React, { useState } from 'react';
// import { GENDER } from '../../constants/enums'
// import { check, signUp } from '../../API/auth';
// import './SignUp.css'

// const SignUp = () => {
//   const [form, setForm] = useState({
//     userid: "",
//     password: "",
//     gender: "",
//     email: "",
//     username: "",
//     phone: "",
//   });

//   const [idMsg, setIdMsg] = useState("");
//   const [idAvailable, setIdAvailable] = useState(null)

//   const [id, setId] = useState('');
//   const [pw, setPw] = useState('');
//   const [pw2, setPw2] = useState('');
//   const [gender, setGender] = useState('');
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleChange = (e) =>{
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const checkUserid = async () => {
//     if (!form.userid) return;

//     const res = await check('userid', form.userid);
//     if (res.data.available){
//       setIdMsg("사용 가능한아이디입니다.");
//       setIdAvailable(true);
//     } else {
//       setIdMsg("이미 사용중인 아이디 ㅇ비니다.")
//       setIdAvailable(false)
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // 새로고침으로 입력 내용 삭제 방지

//     // 입력 정보 검증
//     if (!id|| !pw|| !pw2|| !email|| !name){
//     alert('필수 항목을 모두 입력해주세요.')
//     return;
//     };
//     if(pw !== pw2){
//       alert('비밀번호가 일치하지 않습니다.')
//     return;
//     };
//     if (pw.length < 6){
//       alert('비밀번호는 최소 6자 이상이어야 합니다.')
//     return;
//     }

//     // 백으로 넘길 데이터 뭉치
//     const userData = {
//       userid: id,
//       password: pw,
//       gender,
//       email,
//       username: name,
//       phone,
//     };
    

//     try{
//       await signUp(userData);
//       alert('회원가입이 완료되었습니다.')
//     } catch (error){
//       alert('회원가입에 실패했습니다.');
//     }
//   }



//   return (
//     <div className="signup-page">
//       <section className="signup-left">


//         <div className="signup-profile">
//           <div className="signup-profile-circle"></div>
//           <span className="signup-profile-text">프로필 사진 추가</span>
//         </div>

//         <form className="signup-form" onSubmit={handleSubmit}>
//           <input className="signup-input"type="text" name='id' placeholder="아이디" value={id} onChange={handleChange} />
//           <input className="signup-input" type="password" name='pw'placeholder="비밀번호" value={pw} onFocus={checkUserid} onChange={(e) => setPw(e.target.value)} />
//           <input className="signup-input" type="password" name='pw2' placeholder="비밀번호 확인" value={pw2} onChange={(e) => setPw2(e.target.value)} />
//           <select className="signup-input" name='gender' placeholder="성별" value={gender} onChange={(e) => setGender(e.target.value)} >
//             <option value=''>성별 선택</option>
//             <option value={GENDER.MALE}>남성</option>
//             <option value={GENDER.FEMALE}>여성</option>
//           </select>
//           <input className="signup-input" type="email" name='email' placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           <input className="signup-input" type="text" name='name' placeholder="닉네임" value={name} onChange={(e) => setName(e.target.value)} />
//           <input className="signup-input" type="text" name='phone' placeholder="전화번호" value={phone} onChange={(e) => setPhone(e.target.value)} />

//           <button className="signup-submit-button" type="submit">
//             회원가입
//           </button>
//         </form>
//         <span className="signup-profile-text"><a href="/Login">계정을 가지고 계십니까?</a></span>
//       </section>

//       <section className="signup-right">
//         <img className="signup-bg-img" src='/images/login/회원가입 페이지 이미지.jpg' alt="signup-bg-img" />
//       </section>

//     </div>
//   );
// };

// export default SignUp;
import React, { useState } from 'react';
import { GENDER } from '../../constants/enums';
import { check, signUp } from '../../API/auth';
import './SignUp.css';

const SignUp = () => {
  const [form, setForm] = useState({
    userid: "",
    password: "",
    password2: "",
    gender: "",
    email: "",
    username: "",
    phone: "",
  });

  const [idMsg, setIdMsg] = useState("");
  const [idAvailable, setIdAvailable] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // 아이디 중복 체크 (비밀번호 input 포커스 시)
  const checkUserid = async () => {
    if (!form.userid) return;

    const res = await check('userid', form.userid);

    if (res.data.available) {
      setIdMsg("사용 가능한 아이디입니다.");
      setIdAvailable(true);
    } else {
      setIdMsg("이미 사용 중인 아이디입니다.");
      setIdAvailable(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { userid, password, password2, email, username } = form;

    if (!userid || !password || !password2 || !email || !username) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

const SignUp = () => {

  return (
    <div className="signup-page">
      <section className="signup-left">

        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            className="signup-input"
            type="text"
            name="userid"
            placeholder="아이디"
            value={form.userid}
            onChange={handleChange}
          />
          {idMsg && <span className="id-msg">{idMsg}</span>}

          <input
            className="signup-input"
            type="password"
            name="password"
            placeholder="비밀번호"
            value={form.password}
            onFocus={checkUserid}
            onChange={handleChange}
          />

          <input
            className="signup-input"
            type="password"
            name="password2"
            placeholder="비밀번호 확인"
            value={form.password2}
            onChange={handleChange}
          />

          <select
            className="signup-input"
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="">성별 선택</option>
            <option value={GENDER.MALE}>남성</option>
            <option value={GENDER.FEMALE}>여성</option>
          </select>

          <input
            className="signup-input"
            type="email"
            name="email"
            placeholder="이메일"
            value={form.email}
            onChange={handleChange}
          />

          <input
            className="signup-input"
            type="text"
            name="username"
            placeholder="닉네임"
            value={form.username}
            onChange={handleChange}
          />

          <input
            className="signup-input"
            type="text"
            name="phone"
            placeholder="전화번호"
            value={form.phone}
            onChange={handleChange}
          />

          <button className="signup-submit-button" type="submit">
            회원가입
          </button>
        </form>

        <span className="signup-profile-text">
          <a href="/Login">계정을 가지고 계십니까?</a>
        </span>
      </section>

      <section className="signup-right">
        <img
          className="signup-bg-img"
          src="/images/login/회원가입 페이지 이미지.jpg"
          alt="signup-bg-img"
        />
      </section>
    </div>
  );
};

export default SignUp;
