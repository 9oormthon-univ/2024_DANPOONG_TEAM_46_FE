import React from 'react'
import '../style.css' // 스타일 가져오기

const LoginPage = () => {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY // .env에 저장된 키
  const REDIRECT_URI = 'http://54.180.141.87:8080/swagger-ui/index.html?#/' // 백엔드 리디렉션 URI

  const handleKakaoLogin = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
    window.location.href = KAKAO_AUTH_URL // 카카오 로그인 페이지로 리디렉션
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
