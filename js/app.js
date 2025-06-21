////////// swiper //////////
const swiper = new Swiper(".swiper", {
  loop: true, // ループ
  slidesPerView: 3, // 一度に表示する枚数
  speed: 6000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    //自動再生
    delay: 0, // 途切れなくループ
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
});
//////////ハンバーガーメニュー//////////
const drawerButton = document.getElementById("drawerButton");
const drawerMenu = document.querySelector("header nav ul");

function openDrawer() {
  drawerMenu.classList.toggle("open");
  drawerButton.classList.toggle("reDesign");
}

drawerButton.addEventListener("click", openDrawer);
