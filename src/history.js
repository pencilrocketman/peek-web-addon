const user = "pencilrocketman"
//const endPoint = 'https://shareki.tokyo/'
const endPoint = 'http://localhost:3000/'

const onVisited = async (historyItem) => {
  //console.log(historyItem.url);
  //console.log(historyItem.title);
  //const data = [
  //  ['title', historyItem.title],
  //  ['url', historyItem.url]
  //]
  const res = await window.fetch(endPoint, {
    method: 'POST',
    //body: data.map((a) => encodeURIComponent(a[0]) + '=' + encodeURIComponent(a[1])).join('&'),
    body: JSON.stringify({
      name: user, 
      title: historyItem.title,
      url: historyItem.url
    }), 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      //'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    }
  })
}

browser.history.onVisited.addListener(onVisited);
