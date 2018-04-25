const user = "pencilrocketman"
const password = "hogehoge"
//const endPoint = 'https://shareki.tokyo/'
const endPoint = 'http://localhost:3000/api/history'

let fillZero = (number) => {
  return ('0' + number).slice(-2);
}

let d = new Date();
let year = d.getFullYear();
let month = fillZero(d.getMonth() +1);
let date = fillZero(d.getDate());
let hour = fillZero(d.getHours());
let minute = fillZero(d.getMinutes());
let second = fillZero(d.getSeconds());
let time = year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;

const onVisited = async (historyItem) => {
  const res = await window.fetch(endPoint, {
    method: 'POST',
    body: JSON.stringify({ 
      history: {
        name: user, 
        password: password,
        url: historyItem.url,
        time: time 
      }
    }), 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

browser.history.onVisited.addListener(onVisited);
