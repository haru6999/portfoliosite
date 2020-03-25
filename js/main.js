(function () {
  var url = window.location.href.split('/').pop().split('.')[0];

  var cardItems = [
    {name: 'Illustrator',rate: 80,extension: 'svg'},
    {name: 'Photoshop',rate: 30,extension: 'svg'},
    {name: 'XD',rate: 50,extension: 'svg'},
    {name: 'HTML',rate: 90,extension: 'svg'},
    {name: 'css',rate: 90,extension: 'svg'},
    {name: 'css設計',rate: 70,extension: 'jpg'},
    {name: 'Javascript',rate: 60,extension: 'svg'},
    {name: 'jQuery',rate: 60,extension: 'svg'},
    {name: 'git',rate: 90,extension: 'png'},
    {name: 'Rails',rate: 10,extension: 'svg'},
    {name: 'Unity',rate: 10,extension: 'svg'},
    {name: 'Processing',rate: 20,extension: 'png'},
    {name: 'IoT',rate: 10,extension: 'png'}
  ];
  var card;
  function cardValue(name,rate,extension) {
    card = [
    '<div class="card">'+
      '<div class="card-illust r'+rate+'">'+
        '<div class="card-illust-rate"></div>'+
        '<img src="./image/logo/'+name+'.'+extension+'" alt="'+name+'のロゴ">'+
      '</div>'+
      '<div class="card-text">'+
        '<p>'+name+'</p>'+
        '<p class="card-text-detail">'+rate+'%</p>'+
      '</div>'+
    '</div>'
    ];
    return card;
  };

  if(url == 'index') {
    for (var i=0;i<cardItems.length;i++){
      document.getElementById('cardContainer').insertAdjacentHTML('beforeend', cardValue(cardItems[i].name,cardItems[i].rate,cardItems[i].extension));
    };
  }

  var thumbnailItems = [
    {name: 'freee1weekIntern',extension: 'png',description:'freee株式会社デザイナー',description2:'1weekインターン'},
    {name: 'freee1dayIntern',extension: 'png',description:'freee株式会社デザイナー',description2:'1dayインターン'},
    {name: 'a-teamIntern',extension: 'png',description:'株式会社エイチームデザイナー',description2:'3daysインターン'},
    {name: 'portfoliosite',extension: 'png',description:'ポートフォリオサイト',description2:''},
    {name: 'schoolFestivalPreSite',extension: 'png',description:'学祭学内向けプレサイト',description2:''},
    {name: 'diagnosticChart',extension: 'png',description:'学祭学内向け診断チャート',description2:''},
    {name: 'schoolFestivalSite',extension: 'png',description:'学祭学外向けサイト',description2:''},
    {name: 'ultraSole',extension: 'png',description:'IoT×インソール',description2:''},
    {name: 'fasTag',extension: 'png',description:'メモの備わった電子書籍サービス',description2:'FasTag'},
    {name: 'freeeIntern',extension: 'png',description:'freee株式会社エンジニア',description2:'2weeksインターン'},
    {name: 'moneyManegement',extension: 'png',description:'家計簿アプリ',description2:''},
    {name: 'EdelRoteJazzOrchesterHP',extension: 'png',description:'所属バンドのホームページ',description2:''},
    {name: 'motioCapture',extension: 'png',description:'モーションキャプチャー',description2:'を用いたゲーム製作'},
    {name: 'blockgame',extension: 'png',description:'対戦型ブロックゲーム',description2:''}
  ];
  var thumbnail;
  var position;
  var bgColor;
  var num;
  function thumbnailValue(i,name,extension,description,description2) {
    thumbnail = [
      '<div class="thumbnail">'+
        '<a href="'+name+'.html">'+
          '<img src="./image/thumbnail/'+name+'.'+extension+'" alt="'+description+description2+'" class="thumbnail-img">'+
          '<div class="thumbnail-mask">'+
            '<div class="thumbnail-caption">'+
              description+'<br>'+description2+
            '</div>'+
          '</div>'+
          '</a>'+
      '</div>'
    ];
    return thumbnail;
  };

  if(url == 'index') {
    for (var i=0;i<thumbnailItems.length;i++){
      document.getElementById('thumbnailContainer').insertAdjacentHTML('beforeend', thumbnailValue(i,thumbnailItems[i].name,thumbnailItems[i].extension,thumbnailItems[i].description,thumbnailItems[i].description2));
    };
  }

  var headComponent;
  var prevWork;
  var nextWork;

  function descriptionHeader(name,extension,description,description2) {
    headComponent = [
      '<img src="./image/thumbnail/'+name+'.'+extension+'" alt="'+description+description2+'" class="mainVisual">'+
      '<h1 class="title">'+
        description+'<br>'+
        description2+
      '</h1>'
    ];
    return headComponent;
  }

  function otherWorks(i) {
    if(i <= 0 ) {
      prevWork = [];
    } else {
      prevWork = [
        '<a href="'+thumbnailItems[i-1].name+'.html">'+
          '<div class="otherWorks-circle left">'+
          '＜<br>previous'+
          '</div>'+
          '<img src="./image/thumbnail/'+thumbnailItems[i-1].name+'.'+thumbnailItems[i-1].extension+'" alt="'+thumbnailItems[i-1].description+thumbnailItems[i-1].description2+'">'+
        '</a>'
      ];
    }

    if(i >= thumbnailItems.length - 1) {
      nextWork = [];
    } else {
      nextWork = [
        '<a href="'+thumbnailItems[i+1].name+'.html">'+
          '<div class="otherWorks-circle right">'+
          '＞<br>next'+
          '</div>'+
          '<img src="./image/thumbnail/'+thumbnailItems[i+1].name+'.'+thumbnailItems[i+1].extension+'" alt="'+thumbnailItems[i+1].description+thumbnailItems[i+1].description2+'">'+
        '</a>'
      ];
    }

    return '<div class="widthwise">'+prevWork+nextWork+'</div>';
  }

  var pageNum;
  for (var i=0;i<thumbnailItems.length;i++){
    if(url == thumbnailItems[i].name) {
      pageNum=i;
      document.getElementById('descriptionHeader').insertAdjacentHTML('beforeend', descriptionHeader(thumbnailItems[i].name,thumbnailItems[i].extension,thumbnailItems[i].description,thumbnailItems[i].description2));
      document.getElementById('otherWorksContainer').insertAdjacentHTML('beforeend', otherWorks(i));
      // クリックでページ遷移
      document.onkeydown = function (e){
        if(!e) e = window.event;
        if(pageNum<thumbnailItems.length-1 && e.keyCode == 39) {
          window.location.href = './'+thumbnailItems[pageNum+1].name+'.html';
        } else if(pageNum>0 && e.keyCode == 37) {
          window.location.href = './'+thumbnailItems[pageNum-1].name+'.html';
        }
      };
    }
  }
})();