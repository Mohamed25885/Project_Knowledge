// const diseaseApis = require('./apis/disease');

// diseaseApis.diseaseCreate({ diseaseName: 'eissa', description: "5wlllll" }).then(res => { console.log(res) })
// diseaseApis.diseaseList(1, 50).then(res => { console.log(res) })

setTimeout(() => {

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'

  };

  fetch("http://127.0.0.1:8090/api/collections/diseases/records", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}, 5000);


// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
function addrole(obj) {

  postData('http://127.0.0.1:8090/api/collections/diseases/records', { "diseaseName": `${obj.diseaseName}`, "description": `${obj.description}` })
    .then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
}
function confirm(diseaseNamee, description) {
  obj = { "diseaseName": `${diseaseNamee}`, "description": `${description}` };
  addrole(obj);
}

//add your js code here


