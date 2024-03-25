import React from "react";

function StarRating({ rating }) {
  // 전체 별의 수
  const totalStars = 5;
  // 채워진 별의 수
  const fullStars = Math.floor(rating);
  // 반 별의 유무를 체크 (0.5 이상이면 반 별을 표시)
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  // 빈 별의 수
  const emptyStars = totalStars - fullStars - halfStar;

  return (
    <div className="flex">
      {[...Array(fullStars)].map((_, i) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.9591 9.2598C21.8668 8.9763 21.6301 8.76371 21.3384 8.70226L15.6279 7.49988L12.7235 2.41971C12.575 2.16013 12.299 2 12 2C11.701 2 11.425 2.16013 11.2765 2.41971L8.37208 7.49988L2.66162 8.70226C2.36991 8.76371 2.1332 8.9763 2.04095 9.2598C1.94866 9.5433 2.01483 9.85446 2.2145 10.0758L6.13167 14.4191L5.50612 20.2443C5.47425 20.5413 5.60371 20.8326 5.84546 21.0079C6.08725 21.1833 6.40437 21.2158 6.67671 21.0933L12 18.6975L17.3233 21.0933C17.4327 21.1425 17.5492 21.1667 17.6652 21.1667C17.8381 21.1667 18.0098 21.1129 18.1546 21.0079C18.3963 20.8326 18.5258 20.5413 18.4939 20.2443L17.8683 14.4191L21.7855 10.0758C21.9851 9.85446 22.0513 9.5433 21.9591 9.2598Z"
            fill="#3498db"
          />
        </svg>
      ))}
      {halfStar > 0 && <span>&#189;</span>} // 예시에서는 간단한 텍스트로
      표현하였으나, 반 별 SVG 또는 이미지를 사용하세요.
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`}>&#9734;</span> // 이 부분에 빈 별 SVG 또는 이미지를 사용하세요.
      ))}
    </div>
  );
}

export default StarRating;
