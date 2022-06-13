const button = document.querySelector("#btn");
const innerContainer = document.querySelector(".inner-container");

button.addEventListener("click", () => {
  const getPersonData = async () => {
    try {
      const url = `https://randomuser.me/api`;
      let res = await fetch(url);
      let data = await res.json();
      createPerson(data);
    } catch (error) {
      alert(error);
    }
  };
  getPersonData();
});

const createPerson = (data) => {
    let { first, last } = data.results[0].name;
    let location = data.results[0].location.country;
    let { email, phone } = data.results[0];
    let image = data.results[0].picture.medium;
    
    document.querySelector(".name").innerText = first;
    document.querySelector(".last-name").innerText = last;
    document.querySelector(".location").innerText = location;
    document.querySelector(".email").innerText = email;
    document.querySelector(".phone").innerText = phone;
    document.querySelector(".image").src = image;
    
    // const sname = document.querySelector(".name");
    // sname.innerText = first;
    // const slastname = document.querySelector(".last-name");
    // slastname.innerText = last;
    // const slocation = document.querySelector(".location");
    // slocation.innerText = location;
    // const semail = document.querySelector(".email");
    // semail.innerText = email;
    // const sphone = document.querySelector(".phone");
    // sphone.innerText = phone;
    // const simage = document.querySelector(".image");
    // simage.src = image;
    
    

  };