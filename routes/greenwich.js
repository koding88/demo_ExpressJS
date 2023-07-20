var express = require('express');
var router = express.Router();

router.get('/hn', (req,res)=>{
    var address = "Số 2 Phạm Văn Bạch - Cầu giấy - Hà Nội"
    var img = "https://greenwich.edu.vn/wp-content/uploads/2022/05/DSC07938-scaled.jpg"
    res.render('hanoi', { hn: "Hà Nội", address: address, image: img })
})

router.get('/hcm', (req,res)=>{
    res.render('hcm')
})

module.exports = router