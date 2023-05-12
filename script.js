// 画像のパスを配列に格納
const images = ['minecraft1.png', 'minecraft2.png', 'minecraft3.png'];

// 画像を切り替える関数
function changeImage() {
  // 現在の時間を取得し、東京のタイムゾーンに変換
  const date = new Date();
  const tzoffset = 9 * 60; // 東京のタイムゾーンはUTC+9
  const localTime = date.getTime() + (date.getTimezoneOffset() + tzoffset) * 60 * 1000;
  const time = new Date(localTime);

  // 画像を切り替える条件分岐
  if (time.getMinutes() === 10) {
    document.body.style.backgroundImage = `url(${images[0]})`;
  } else if (time.getMinutes() === 11 || time.getMinutes() === 12 || time.getMinutes() === 13) {
    document.body.style.backgroundImage = `url(${images[1]})`;
  } else {
    document.body.style.backgroundImage = `url(${images[2]})`;
  }
}

// 1分ごとに背景画像を変更する
setInterval(changeImage, 60 * 1000);

    function displayNextChar(text, element, index) {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(function() { displayNextChar(text, element, index); }, 50);
      }
    }

    window.onload = function() {
      const kaomoji = document.getElementById("kaomoji");
      kaomoji.innerHTML = "";
      displayNextChar("IP kyame.pgw.jp", document.getElementsByTagName("h1")[0], 0);
      setTimeout(function() { displayNextChar("Hello! Thank you for visiting this website", document.getElementsByTagName("p")[0], 0); }, 1000);
      setTimeout(function() { displayNextChar("The above IP address is for my Minecraft server.", document.getElementsByTagName("p")[1], 0); }, 3300);
      setTimeout(function() { displayNextChar("Please feel free to come and visit.", document.getElementsByTagName("p")[2], 0); }, 6000);
        kaomoji.innerHTML = getRandomKaomoji();
        const element = document.getElementById('my-element');
        element.style.letterSpacing = ('0px');
    }
