import React from 'react';
import '../style.css'; // 스타일 적용 (필요한 경우 경로 확인)

const TestPage = () => {
  return (
    <div>
      <i className="ic-back"></i>
      <i className="ic-trash"></i>
      <i className="ic-door-open"></i>
      <div className="container">
        <strong className="tag-club">북클럽</strong>
      </div>
      <div>
        <i className="ic-star-score"></i>
        <i className="ic-star-score"></i>
        <i className="ic-star-score"></i>
        <i className="ic-star-score"></i>
        <i className="ic-star-score"></i>
      </div>
    </div>
  );
};

export default TestPage;
