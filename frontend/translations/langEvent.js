import { langText } from './language'

let langPr = '',
    langRes = [],
    langTitle = [];

langEvent();
function push_ko(){
  langRes = langText['ko'];
  langPr = 'ko';
  langTitle['title'] = '한글';
  langTitle['icon'] = 'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_ko.png';
}
function push_en(){
  langRes = langText['en'];
  langPr = 'en';
  langTitle['title'] = 'ENG';
  langTitle['icon'] = 'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_en.png';
}
function push_zh(){
  langRes = langText['zh'];
  langPr = 'zh';
  langTitle['title'] = '中文';
  langTitle['icon'] = 'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_cn.png';
}


function langEvent(){
  let url = location.href;
  if( url.match('index_ko.html') ) {
    push_ko();
  }
  else if(url.match('index_en.html')){
    push_en();
  }
  else{
    if(url.match('l=ko')){
      push_ko();
    }
    else if(url.match('l=en')){
      push_en();
    }
    else if(url.match('l=zh')){
      push_zh();
    }
    else{
      let userLang = navigator.language || navigator.userLanguage;
      userLang = userLang.toLowerCase().substring(0.2);
      if( userLang === 'zh' ){
        push_zh();
      }
      else if( userLang === 'en' ){
        push_en();
      }
      else{
        push_ko();
      }
    }
  }
}

function langTitleFnc(tit){
  if( tit === '한글' ){
    langTitle['title'] = '한글';
    langTitle['icon'] = 'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_ko.png';
  }
  else if( tit === 'ENG' ) {
    langTitle['title'] = 'ENG';
    langTitle['icon'] = 'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_en.png';
  }
  else {
    langTitle['title'] = '中文';
    langTitle['icon'] = 'https://s3.ap-northeast-2.amazonaws.com/eosnova.io.resource/images/img_cn.png';
  }
}

export { langPr, langTitle, langRes, langEvent, langTitleFnc };
