function photoGallery() {
  // getElementByIdのショートカット関数を作成
  function $(id) {
    return document.getElementById(id);
  }

  // 現在どのエントリーを表示しているかを格納する
  var crIndex = 0; // 値を初期化
  var c = {
    classL: "endL",
    classR: "endR",
    classOn: "on"
  };

  // サムネイル画像とリンクの設定(オブジェクトリテラル形式でオブジェクトを保存しておく)
  var entry = {
    date:     $("entry-date"),
    title:    $("entry-tit"),
    pct:      $("entry-pct"),
    img:      new Image(),
    morelink: $("morelink"),
    links:    $("entry-links")
  };

  entry.morelink.innerHTML = "&raquo; More"; // パーマリンク用のテキストを挿入
  entry.links.style.display = "none"; // entry.linksを非表示に
  var permalinks = entry.links.getElementsByTagName('a');
  var zoomlinks = $("thumbs").getElementsByTagName('a');

  // エントリーを切り替える為の処理
  var wrap = $("container");
  wrap.className = c.classL; // デフォルトで左側表示にしておく

  // index番号が変われば各設定も変更される処理
  function changeEntry() {
    entry.img.src = zoomlinks[crIndex].href;
    entry.img.alt = permalinks[crIndex].innerHTML;
    entry.date.innerHTML = zoomlinks[crIndex].getElementsByTagName('img')[0].alt;
    entry.title.innerHTML = permalinks[crIndex].innerHTML;
    entry.pct.appendChild(entry.img);
    entry.morelink.href = permalinks[crIndex].href;

    // index番号に合わせてwrapのクラス名を変更
    if (permalinks.length == 1) wrap.className = c.classR + "" + c.classL;
    else if (crIndex == permalinks.length - 1) wrap.className = c.classR;
    else if (crIndex == 0) wrap.className = c.classL;
    else wrap.className = "";

    for (var i = 0, l = permalinks.length; i < l; i++) {
      if (i == crIndex) {
        zoomlinks[crIndex].className = c.classOn;
      } else {
        zoomlinks[i].className = '';
      }
    }
  }

  var preloads = [];
  for (var i = 0, l = permalinks.length; i < l; i++) {
    // プリロード処理
    preloads[i] = new Image();
    preloads[i].src = zoomlinks[i].href;

    // この後zoomlinks[i]のonclickイベントの処理にインデックス番号を渡すため
    zoomlinks[i].index = i;

    // サムネイルリンクをクリックした時の処理
    zoomlinks[i].onclick = function() {
      crIndex = this.index;
      changeEntry();
      return false;
    }
  };

  $('pic-prev').onclick = function() {
    if (crIndex == 0) return false;
    crIndex --;
    changeEntry();
    return false;
  };
  $('pic-next').onclick = function() {
    if (crIndex == permalinks.length -1) return false;
    crIndex ++;
    changeEntry();
    return false;
  };
  changeEntry(); // エントリー表示初期化
}


if (window.addEventListener) window.addEventListener('load', photoGallery, false);
else if (window.attachEvent) window.attachEvent('onload', photoGallery);