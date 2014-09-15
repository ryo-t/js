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

}