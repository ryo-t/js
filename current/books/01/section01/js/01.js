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

  // オブジェクトリテラル形式でオブジェクトを保存しておく
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


}