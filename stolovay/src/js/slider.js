/* eslint-disable import/prefer-default-export */
export function searchClickAll() {
  const clickAll = document.querySelector('.btn.active, .btn:active');
  clickAll.addEventListener('click', () => {
    console.log('clickAll');
  });
}
