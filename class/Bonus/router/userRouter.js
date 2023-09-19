// * make-user => POST
// * delete-all => DELETE

const router = require('express').Router();
const User = require('../models/users')


//*POST
// * username이랑 password가 와야함
router.post('/make-user', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })
    user
        .save()
        .then((user) => {
            res.send(user);
        })
        .catch((err) => {
            res.sendStatus(500);
        });
})

//*모든 유저 삭제
router.delete('/delete-all', async (req, res) => {
    User.deleteMany({})
        .then(() => {
            res.sendStatus(200)
        })
        .catch((err) => {
            res.sendStatus(500)
        })
})

//*특정 유저 삭제
router.delete('/delete-user/:id', async (req, res) => {
    const userId = req.params.id
    User.deleteMany({ _id: userId})
        .then(() => {
            res.sendStatus(200)
        })
        .catch((err) => {
            res.sendStatus(500)
        })
})

module.exports = router;