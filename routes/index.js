const express = require('express');
const router = express.Router();
const multer = require('multer');
const img = require('public/javascripts/img.js');
const upload = multer({ dest: 'public/description_text/' });

/* GET home page. */

router.get('/',async function (res) {
  let images = img.listOfImages();
  await images;
    res.render('index', { name: 'Richard', images: images });
});

router.post('/description', upload.single('imageUpload'), async function (req, res) {
  let descriptionText = req.body.description;
  console.log(descriptionText);
  res.render('index', { name: 'Richard', postText: descriptionText });
  await descriptionText;
})

router.post('/image', upload.single('imageUpload'), async (req) => {
  try {
    let image = req.file.filename;
    console.log(image);
    await image;
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;


//TODO: a szöveget mentsük el egy mappába