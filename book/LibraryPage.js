import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavigationBar from '../../components/NavigationBar'
import styles from './LibraryPage.module.css' // 스타일 가져오기

const LibraryPage = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {/* 상단 프로필 영역 */}
        <div className={styles.profileHeader}>
          <div className={styles.profileInfo}>
            <div className={styles.profileImage}>
              <img
                className={styles.profileImage}
                src="/img/star/lion.png"
                alt="프로필 이미지"
              />
            </div>
            <div className={styles.profileBox}>
              <h1 className={styles.profileName}>단풍톤님의 서재</h1>
              <p className={styles.starName}>사자자리</p>
            </div>
          </div>
        </div>
      </div>
      {/* 네비게이션 바 */}
      <NavigationBar />
    </div>
  )
}

export default LibraryPage
