function getData(callback) {
  setTimeout(() => {
    console.log("서버에서 데이터 가져옴");
    callback({ name: "은관" }); //서버에서 가져온 데이터
  }, 2000);
}

getData((data) => {
  console.log(data.name);
});
