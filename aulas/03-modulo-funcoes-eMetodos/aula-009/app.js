//  callbacks e forEach
const myFunc = (callback) => {
  const value = 77;

  callback(value);
};

myFunc((number) => {
  console.log(number);
});

const socialNetworks = ["youtube", "twitter", "instagram", "facebook"];

// socialNetworks.forEach((socialNetworks, index, array) => {
//   console.log(index, socialNetworks, array);
// });

const logArrayInfo = (socialNetworks, index, array) => {
  console.log(index, socialNetworks, array);
};

socialNetworks.forEach(logArrayInfo);
