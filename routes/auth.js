const router = require ('express').Router();

const User = require ('../model/User');



router.post('/res',async (req,res) =>{

    res.send("DONE");

    const user= new User({

        name:req.body.name,
        email: req.body.email,
        password: req.body.password

    });

    try {
        const sav= await this.use.save();
        res.send(sav);
        
    } catch (error) {
        res.status(400).send(error);
        
    }

});

router.get('/home',(req,res) =>{

    res.send("LOKI");
});






module.exports = router;

