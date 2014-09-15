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
  };
}