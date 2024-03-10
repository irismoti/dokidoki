function openEnvelope() {
  var envelope = document.getElementById("envelope");
  var letter = document.getElementById("letter");
  var message = document.getElementById("message");

  envelope.style.pointerEvents = "none"; // クリックイベントを無効化
  letter.style.transform = "rotateX(0deg)"; // 封筒を開くアニメーション
  setTimeout(function() {
    message.style.opacity = "1"; // メッセージを表示するアニメーション
  }, 1000);
}
