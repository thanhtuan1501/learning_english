
const togglePages = () => {
    let mainPage = document.querySelector('#main_page');
    if(mainPage.style.display == 'block'){
        document.querySelector('#main_page').style.display = 'none';
        document.querySelector('#input_page').style.display = 'block';
    } else {
        document.querySelector('#main_page').style.display = 'block';
        document.querySelector('#input_page').style.display = 'none';
    }
}




const defaut = {
        id: 1,
        imgLink: "./images/sub_img/sub_img1.jpeg",
        text: "text",
        time: "1"
}
const setSubcard = (subCard) => {
    let cardSub = document.getElementById("card-sub");
    let html = `<div class="img-sub">
                <img src="${subCard.imgLink}" alt="">
                </div>
                <div class="sub-content">
                    <span>${subCard.text}</span>
                </div>`
    cardSub.innerHTML = html;
}
var order = 0;
const nextSubCard = () =>{
    order++;
    if(order > listSubCards.length){
        order = 1;
    }
    let subImg = listSubCards.find((element,index)=>{
        return (index + 1) == order;
    })
    setSubcard(subImg);
}
const backSubCard = () =>{
    order--;
    if(order <= 0){
        order = listSubCards.length;
    }
    let subImg = listSubCards.find((element,index)=>{
        return (index + 1) == order;
    })
    setSubcard(subImg);
}
var nowJson = '';
var saveJson = () =>{
    let time = document.getElementById('time_sub').value;
    time = parseInt(time);
    let link = document.getElementById('link_sub').value;
    let text = document.getElementById('text_sub').value;
    let id = listSubCards.length +1;
    if(time == ''|| link == '' || text == ''){
        alert('không được bỏ trống')
    } else {
        if (checkRepeat(listSubCards, time) == true){
            var subcard = taoSubCard(link, id , time, text);
            nowJson = subcard;
            listSubCards.push(subcard);
            listSubCards.sort((a,b) => {
                return a.time - b.time;
            })
        } else {
            alert('không được đặt trùng sub hình ảnh')
        }

    }

    document.getElementById('time_sub').value = '';
    document.getElementById('link_sub').value = '';
    document.getElementById('text_sub').value = '';
}


const jsonHientai = () => {
    let json = JSON.stringify(nowJson);
    document.getElementById('json_text').value = json;
}
// js cho video youtube
var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player1;
var player2;
function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('main_video', {
        height: '390',
        width: '640',
        playerVars: {
          'playsinline': 1
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
      player2 = new YT.Player('input_video', {
        height: '390',
        width: '640',
        playerVars: {
          'playsinline': 1
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
}

function onPlayerReady(event) {
    event.target.loadPlaylist(playList.map(e => e.videoUrl));
    setTimeout(event.target.pauseVideo(),300);
}

function onPlayerStateChange(event) {
    handleTranscript();
}

function getCurrentTime () {
    let time = player2.getCurrentTime()
    time = Math.round(time*10)/10
    document.getElementById('time_sub').value = time;
}

// post subtile cho video 
function handleTranscript(){
    if(player1.getPlayerState() == 1){
        let time1 = player1.getCurrentTime();
        time1 = Math.floor(time1)
        putTranScript(time1,sub, time, secondTime)
        if( checkLock == 1){
            listSubCards.map(e => {
                if (e.time == time1){
                    setSubcard(e);
                }
            })
        }
        setTimeout(handleTranscript,500)
    }
    if(player2.getPlayerState() == 1){
        let time2 = player2.getCurrentTime();
        time2 = Math.floor(time2)
        putTranScript(time2,sub, time, secondTime)  
        setTimeout(handleTranscript,500)
    }

}
var ind = 0;
function putTranScript (time, subArray, timeArray, secondArray) {
    let html = document.querySelectorAll('.transcript_video h3');
    let len = timeArray.length
    for(let i = 0 ; i < len ; i++){
        if(secondArray[i] == time){
            ind = i;
        }
    }
    html.forEach(e => e.innerText = `${timeArray[ind]} -  ${subArray[ind]}`)
}
var checkLock = 1;
const lock = () => {
    let lockDisplay = document.querySelector('.lock');
    if(checkLock == 1){
        lockDisplay.innerText = 'mở khóa'
        lockDisplay.classList.add('lock-active');
        checkLock = 0;
    } else {
        lockDisplay.classList.remove('lock-active');
        lockDisplay.innerText = 'đã khóa'
        checkLock = 1;
    }
}

const checkRepeat = (arr, checkValue) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i].time == checkValue){
            return false;
        }        
    }
    return true;
}
const preVideo = () => {
    player1.previousVideo()
}
const nextVideo = () => {
    player1.nextVideo()
}
const preVideo2 = () => {
    player2.previousVideo()
}
const nextVideo2 = () => {
    player2.nextVideo()
}