const router = require ('express').Router();



router.post('/res',(req,res) =>{

    res.send("DONE");

})

router.get('/home',(req,res) =>{

    res.send("LOKI");
})





module.exports = router;

