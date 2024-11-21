import React from 'react'
import '../style.css' // 스타일 가져오기

const LoginPage = () => {
  const handleKakaoLogin = () => {
    console.log('카카오 로그인 버튼 클릭')
    // 카카오 로그인 로직 추가
  }

  return (
    <div className="login-page">
      <img
        src="/img/logo title.svg"
        alt="북두칠성 로고"
        className="login-logo"
      />
      <p className="login-subtitle">독서 공유 어플리케이션 북두칠성</p>
      <img
        src="/img/kakao_login_medium_wide.png"
        alt="카카오 로그인 버튼"
        className="kakao-login-button"
        onClick={handleKakaoLogin}
      />
      <a href="/terms" className="terms-link">
        이용약관 확인하기
      </a>
    </div>
  )
}

export default LoginPage
