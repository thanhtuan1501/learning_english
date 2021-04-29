const togglePages = () => {
    let mainPage = document.querySelector('#main_page').style.display;
    if(mainPage == 'block'){
        document.querySelector('#main_page').style.display = 'none';
        document.querySelector('#input_page').style.display = 'block';
    } else {
        document.querySelector('#main_page').style.display = 'block';
        document.querySelector('#input_page').style.display = 'none';
        
    }
}


var listSubCards = [
    {   id: 1,
        imgLink: "./images/sub_img/sub_img1.jpeg",
        text: "car 1",
        time: "1",
    },
    {   id: 2,
        imgLink: "./images/sub_img/sub_img2.jpg",
        text: "bycle 2",
        time: "2"
    },
    {   id: 3,
        imgLink: "./images/sub_img/sub_img3.jpg",
        text: "computer 3",
        time: "3"
    },
]
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
    let link = document.getElementById('link_sub').value;
    let text = document.getElementById('text_sub').value;
    let id = listSubCards.length +1;
    if(time == ''|| link == '' || text == ''){
        alert('không được bỏ trống')
    } else {
        var subcard = taoSubCard(link, id , time, text);
        nowJson = subcard;
        listSubCards.push(subcard);
    }
    listSubCards.sort((a,b) => {
        return parseFloat(a.time) - parseFloat(b.time);
    })
    document.getElementById('time_sub').value = '';
    document.getElementById('link_sub').value = '';
    document.getElementById('text_sub').value = '';
}


const jsonHientai = () => {
    if (typeof nowJson.toJson == 'function' ){
        let json = nowJson.toJson();
        document.getElementById('json_text').value = json;
    }
    console.log(typeof nowJson.toJson )
}

