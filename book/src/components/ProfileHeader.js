import React from 'react'
import '../style.css'

const ProfileHeader = ({ nickname, starName, profileImage, starImage }) => {
  return (
    <div className="profile-header">
      <img src={profileImage} alt="프로필 이미지" className="profile-image" />
      <div className="profile-info">
        <div className="nickname">{nickname}님 반가워요!</div>
        <div className="star-name">{starName}</div>
      </div>
      <img src={starImage} alt="별자리 이미지" className="star-image" />
    </div>
  )
}

export default ProfileHeader
