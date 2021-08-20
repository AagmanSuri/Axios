btn = document.getElementById("btn");
const makerequest = () => {
  console.log("clicked");
  config = {
    method: "get",
    url: "data.txt",
  };

  const promiseObj = axios(config);
  promiseObj.then((res) => {
    console.log(res);
  });
};

btn.addEventListener("click", makerequest);
