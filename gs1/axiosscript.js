btn = document.getElementById("btn");
const makerequest = async () => {
  console.log("clicked");
  config = {
    method: "get",
    url: "data.txt",
  };

  //   const promiseObj = axios(config);
  //   promiseObj.then((res) => {
  //     console.log(res);
  //     console.log(res.data);
  //   });

  //   axios(config).then((res) => {
  //     console.log(res);
  //   });

  //   axios
  //     .get("data1.txt")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => console.log(error));
  // };
  //   axios
  //     .get("data.txt")
  //     .then((res) => {
  //       console.log(res);
  //       document.getElementById("divdata").innerText = res.data;
  //     })
  //     .catch((error) => console.log(error));
  // };

  // Async and await

  const res = await axios(config);
  console.log(res);
};
btn.addEventListener("click", makerequest);
