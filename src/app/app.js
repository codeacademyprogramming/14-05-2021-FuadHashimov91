

function updClock() {
    let now = new Date();
    let day = now.getDay(),
        month = now.getMonth(),
        dayNum = now.getDate(),
        year = now.getFullYear(),
        hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds(),
        pe = "AM";

    let mon = ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"];
    let week =["Bazar Ertesi","Cersembe axsami","Cersembe","Cume axsami","Cume","Sembe","Bazar"];
    let idS = ["day-name","month","day-number","year","hour","min","sec","period"];
    let vals = [week[day],month,dayNum,year,hour,minute,second,pe];
    
    // for(let i = 0;i< idS.length ; i++){
    //     document.getElementById(idS[i]).firstChild.nodeValue = vals[i];
    // }
}

function clock() {
    updClock();
    window.setInterval("updClock()",1);
}