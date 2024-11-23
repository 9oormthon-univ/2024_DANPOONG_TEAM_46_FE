import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './SettingsPage.module.css';

const SettingsPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem('kakao_access_token'); // 저장된 액세스 토큰
      if (!accessToken) {
        alert('로그인이 되어 있지 않습니다.');
        return;
      }

      // 카카오 로그아웃 API 호출
      await axios.post(
        'https://kapi.kakao.com/v1/user/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // 토큰 전달
          },
        }
      );

      // 토큰 삭제 및 로그아웃 후 처리
      localStorage.removeItem('kakao_access_token');
      alert('로그아웃 되었습니다.');
      navigate('/'); // 메인 페이지로 이동
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
      alert('로그아웃에 실패했습니다.');
    }
  };

  return (
    <div className={styles.settingsPage}>
      <div className={styles.header}>
        {/* 뒤로가기 버튼 */}
        <i
          className={`ic-back ${styles.icon}`}
          onClick={() => navigate(-1)} // 이전 페이지로 이동
        ></i>
        <h1>환경설정</h1>
      </div>
      <ul className={styles.settingsList}>
        <li>
          <button onClick={() => alert('이용약관 보기')} className={styles.button}>
            이용약관
          </button>
        </li>
        <li>
          <button onClick={handleLogout} className={styles.button}>
            로그아웃
          </button>
        </li>
      </ul>

    </div>
  );
};

export default SettingsPage;
