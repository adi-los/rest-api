const express = require("express")
const router = express.Router()


let users = [
    {id: 0, user: "adil", email: "mr.mrabti.adil@gmail.com"},
    {id: 1, user: "hossame", email: "mr.hossame.hamedani@gmail.com"},
    {id: 2, user: "abdellah", email: "mr.abdellah.gnaoui@gmail.com"},
    {id: 3, user: "amine", email: "mr.amine.jamlaoui@gmail.com"}
]


router.get('/', (req, res) => {
    res.status(200).send(users)
})




router.get("/:id", (req, res) => {
    const user = users.find((el) => parseInt(el.id) === parseInt(req.params.id))
    if(!user) return res.status(404).send("User Not Found")
    return res.status(200).send(user)
})


router.post("/", (req, res) => {
    const schema = Joi.object({
        user: Joi.string().required().min(4).max(10),
        email: Joi.string().required().min(11).max(24)
    }) 

    const {error} = schema.validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    const myUser = {
        id: users.length,
        user: req.body.user,
        email: req.body.email
    }
    users.push(myUser)
    res.status(200).send(myUser)
})



router.put("/:id", (req, res) => {
    const user = users.find((el) => parseInt(el.id) === parseInt(req.params.id))
    if(user){
        const schema = Joi.object({
            user: Joi.string().required().min(4).max(10),
            email: Joi.string().required().min(11).max(24)
        })
        
        const {error} = schema.validate(req.body)
        if(error) return res.status(500).send(error.details[0].message)
        
            user.user = req.body.user,
            user.email =  req.body.email
        

        res.status(200).send(user)
    }else return res.status(500).send("User Not Found")
})


router.delete('/:id', (req, res) => {
    const user = users.find((el) => parseInt(el.id) === parseInt(req.params.id))
    if(!user) return res.status(404).send("User Not Found")
    userIndex = users.indexOf(user)
    users.splice(userIndex, 1)
    res.status(200).send(user)
})


module.exports = router