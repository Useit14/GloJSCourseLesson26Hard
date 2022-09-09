const sendData = (url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.responseType = "json";

  xhr.onerror = function () {
    alert(`Произошла ошибка во время отправки: ${xhr.status}`);
  };
  return xhr.send(data);
};

const getData = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.responseType = "json";
  xhr.onerror = function () {
    alert(`Произошла ошибка во время отправки: ${xhr.status}`);
  };

  return xhr.send();
};

const data = getData("db.json");

sendData("https://jsonplaceholder.typicode.com/posts", data);
