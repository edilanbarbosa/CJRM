// utilizando callbacks
const ul = document.querySelector('[data-js="ul"]');

const socialNetworks = ["youtube", "twitter", "instagram", "facebook"];

let htmlTemplate = "";

socialNetworks.forEach((socialNetworks) => {
  htmlTemplate += `<li style="color: darkblue;">${socialNetworks}</li>`;
});

ul.innerHTML = htmlTemplate;
