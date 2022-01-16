// 영상 제목 옆 버튼 상호작용 (접기, 펼치기)
(function unfoldTitle() {
  const moreBtn = document.querySelector(".titleAndMoreButton .moreBtn");
  const title = document.querySelector(".titleAndMoreButton .mainTitle");

  moreBtn.addEventListener("click", () => {
    title.classList.toggle("unfold");
    moreBtn.classList.toggle("clicked");
  });
})();

// 액션버튼 상호작용 (활성화, 비활성화)
(function onClickActions() {
  const actionBtns = document.querySelectorAll(".actions button");
  actionBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      console.log(btn);
    });
  });
})();
