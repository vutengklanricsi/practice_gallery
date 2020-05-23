const fs = require('fs');

let listOfPictures = async () => {
  const pictures = await fs.promises.readdir('/public/description_text');
  let arrayOfPics = [];
  for (const file of pictures) {
    arrayOfPics.push(file);
    return arrayOfPics;
  }
}

module.exports = { listOfPictures }