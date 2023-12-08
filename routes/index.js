var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hello!",
    user: "Lamarana",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Pâté",
    added: new Date()
  },
  {
    text: "Djarama!",
    user: "Alphadjo",
    added: new Date()
  },
  {
    text: "On Belke Djam!",
    user: "Djibril",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.message, text: req.body.author, added: new Date()})
  res.redirect('/');
})

module.exports = router;
