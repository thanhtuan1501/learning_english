taoSubCard = (imgLink, id, time, text) => {
    var subCard = new Object();
    subCard.imgLink = imgLink;
    subCard.id = id;
    subCard.time = time;
    subCard.text = text;
    return subCard;
}
var listSubCards = [
    {imgLink: "./images/sub_img/bear.jpg", id: 1, time: 12, text: "bear"},
    {imgLink: "./images/sub_img/cub.JPG", id: 2, time: 19, text: "cub"},
    {imgLink: "./images/sub_img/cat.JPG", id: 3, time: 31, text: "cat"},
    {imgLink: "./images/sub_img/kitten.JPG", id: 4, time: 38, text: "kitten"},
    {imgLink: "./images/sub_img/chicken.JPG", id: 5, time: 45, text: "chicken"},
    {imgLink: "./images/sub_img/chick.JPG", id: 6, time: 50, text: "chick"},
    {imgLink: "./images/sub_img/cow.JPG", id: 7, time: 58, text: "cow"},
    {imgLink: "./images/sub_img/calf.jpg", id: 8, time: 69, text: "calf"}
]
var sub = ["English singsing", "Baby Animals", "bear", "What is the name for a baby bear?", "cub", "It’s a cub.", "Cubs really like honey.", "cat", "What is the name for a baby cat?", "kitten", "It's a kitten.", "chicken", "What is the name for a baby chicken?", "chick", "It’s a chick.", "Chicks are yellow.", "cow", "What is the name for a baby cow?", "calf", "It’s a calf.", "deer", "What is the name for a baby deer?", "fawn", "It’s a fawn.", "dog", "What is the name for a baby dog?", "puppy", "It's a puppy.", "duck", "What is the name for a baby duck?", "duckling", "It’s a duckling.", "frog", "What is the name for a baby frog?", "tadpole", "It’s a tadpole.", "Tadpoles grow into frogs.", "horse", "What is the name for a baby horse?", "foal", "It’s a foal.", "Kangaroo", "What is green for a baby kangaroo?", "joey", "It’s a joey.", "pig", "What is the name for a baby pig?", "piglet", "It’s a piglet.", "Piglets like mud baths.", "rabbit", "What is the name for a baby rabbit?", "bunny", "It’s a bunny.", "sheep", "What is the name for a baby sheep?", "lamb", "It’s a lamb.", "Review"]
var time = ["00:01", "00:07", "00:12", "00:16", "00:19", "00:21", "00:24", "00:30", "00:34", "00:38", "00:40", "00:44", "00:46", "00:49", "00:51", "00:53", "00:58", "01:05", "01:09", "01:11", "01:16", "01:20", "01:24", "01:26", "01:30", "01:33", "01:37", "01:39", "01:43", "01:47", "01:51", "01:56", "02:01", "02:05", "02:10", "02:12", "02:14", "02:21", "02:24", "02:30", "02:31", "02:37", "02:44", "02:50", "02:53", "02:58", "03:02", "03:05", "03:08", "03:11", "03:16", "03:24", "03:28", "03:29", "03:34", "03:43", "03:47", "03:52", "03:56"]
var convertSecondTime = (time) => {
    var timeS = [];
    for (let i = 0; i < time.length; i++) {
        timeS[i] = parseInt(time[i].split(":")[0]) * 60 + parseInt(time[i].split(":")[1])
    }
    return timeS
}
var secondTime = [1, 7, 12, 16, 19, 21, 24, 30, 34, 38, 40, 44, 46, 49, 51, 53, 58, 65, 69, 71, 76, 80, 84, 86, 90, 93, 97, 99, 103, 107, 111, 116, 121, 125, 130, 132, 134, 141, 144, 150, 151, 157, 164, 170, 173, 178, 182, 185, 188, 191, 196, 204, 208, 209, 214, 223, 227, 232, 236]
var playList = [
    { videoId : 1, videoUrl : 'v0hN3UP0PQo'},
    { videoId : 2, videoUrl : 'hPTwprjSzZs'},
    { videoId : 3, videoUrl : 'iZSaRktkvxA'},
    { videoId : 4, videoUrl : 'Oxw6FoUNeT4'}
]
console.log(playList.map(e => e.videoUrl))