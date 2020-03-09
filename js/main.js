
// var skillRateText = document.getElementsByClassName('card-text-detail');
// var skillIllustRate = document.getElementsByClassName('card-illust-rate');
// var num = skillRateText.length;
// var skillRate = new Array(num);

// var cssTemplate = '<style type="text/css">.card-illust-rate:before{transform: rotate(150deg);}</style>';
// var css = cssTemplate.replace('150', '10');

// for (var i=0 ;i<num;i++) {
//   skillRate[i] = skillRateText[i].textContent.substr( 0, 2 );
//   // skillIllustRate[i].replace(css);
//   skillIllustRate[i].getAttribute('deg', parseInt(skillIllustRate[i].getAttribute('rotate(20deg)')));
// };

// for (var i=10 ;i<=100;i++) {

// }


var cardItems = [
  {name: 'Illustrator',rate: 80,extension: 'svg'},
  {name: 'Photoshop',rate: 30,extension: 'svg'},
  {name: 'XD',rate: 50,extension: 'svg'},
  {name: 'HTML',rate: 90,extension: 'svg'},
  {name: 'css',rate: 90,extension: 'svg'},
  {name: 'css設計',rate: 70,extension: 'jpg'},
  {name: 'Javascript',rate: 60,extension: 'svg'},
  {name: 'jQuery',rate: 60,extension: 'svg'},
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

for (var i=0;i<cardItems.length;i++){
  document.getElementById('cardContainer').insertAdjacentHTML('beforeend', cardValue(cardItems[i].name,cardItems[i].rate,cardItems[i].extension));
};

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
  {name: 'moneyManegement',extension: 'png',description:'家計簿アプリ',description2:''},
  {name: 'EdelRöteJazzOrchesterHP',extension: 'png',description:'所属バンドのホームページ',description2:''},
  {name: 'freeeIntern',extension: 'png',description:'freee株式会社エンジニア',description2:'2weeksインターン'},
  {name: 'motioCapture',extension: 'png',description:'モーションキャプチャー',description2:'を用いたゲーム製作'},
  {name: 'blockgame',extension: 'png',description:'対戦型ブロックゲーム',description2:''}
];
var thumbnail;
var position;
var bgColor;
var num;
function thumbnailValue(i,name,extension,description,description2) {
  // if(i % 2 == 0) {
  //   position = 'upperLeft';
  // }else {
  //   position = 'lowerLeft';
  // }
  // num = Math.floor(i / 3) + (i % 3);
  // if (num >= 3) {
  //   num = num % 3;
  // }
  // switch (num){
  //   case 0:
  //     bgColor = 'blue';
  //     break;
  //   case 1:
  //     bgColor = 'pink';
  //     break;
  //   case 2:
  //     bgColor = 'lblue';
  //     break;
  // }

  thumbnail = [
    '<div class="thumbnail">'+
      // '<div class="thumbnail-foundation '+position+' '+bgColor+'"></div>'+
      '<img src="./image/thumbnail/'+name+'.'+extension+'" alt="'+description+description2+'" class="thumbnail-img">'+
      '<div class="thumbnail-mask">'+
        '<div class="thumbnail-caption">'+
          description+'<br>'+description2+
        '</div>'+
      '</div>'+
    '</div>'
  ];
  return thumbnail;
};

for (var i=0;i<thumbnailItems.length;i++){
  document.getElementById('thumbnailContainer').insertAdjacentHTML('beforeend', thumbnailValue(i,thumbnailItems[i].name,thumbnailItems[i].extension,thumbnailItems[i].description,thumbnailItems[i].description2));
};