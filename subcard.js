taoSubCard = (imgLink, id, time, text) => {
    var subCard = new Object();
    subCard.imgLink = imgLink;
    subCard.id = id;
    subCard.time = time;
    subCard.text = text;
    subCard.toJson = function() {
        return JSON.stringify(this);
    }
    return subCard;
}
// không dùng arrow function trong method của contructor object;