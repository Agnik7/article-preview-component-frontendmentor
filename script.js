const share = document.querySelector("#share");
const share_icon = document.querySelectorAll(".share-icon");

for (let i = 0; i < share_icon.length; i++) {
  share_icon[i].addEventListener("click", () => {
    share.classList.value == "share slide-out-bottom"
      ? (share.classList.value = "share slide-top")
      : (share.classList.value = "share slide-out-bottom");
  });
}
