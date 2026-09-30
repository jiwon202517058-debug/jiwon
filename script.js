const button = document.getElementById("joinBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "참여 문의 기능은 샘플입니다. 실제 사이트에서는 문의 폼을 연결할 수 있습니다.";
});