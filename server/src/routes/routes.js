const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  if (req.session.userId) {
    res.send(req.session.userId)
  }
})

module.exports = router