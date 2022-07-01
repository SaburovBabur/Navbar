// ======== DATABASE =============
const postImg = document.querySelector('#post__image');
const postHeart = document.querySelector('#post__heart');

let isPostLiked = false;
// ==========

// Logic
postImg.ondblclick = function (event) {
  if (isPostLiked) {
    isPostLiked = false;

    postHeart.classList.replace('text-red-500', 'text-white');
    postHeart.classList.replace('stroke-red-500', 'stroke-gray-700');
  } else {
    isPostLiked = true;

    postHeart.classList.replace('text-white', 'text-red-500');
    postHeart.classList.replace('stroke-gray-700', 'stroke-red-500');
  }
};
