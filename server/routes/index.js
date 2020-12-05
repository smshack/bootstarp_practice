const express = require('express');
const router = express.Router();

router.get('/',(request,response)=>{
    console.log('/로 들어옴');
    response.send({greeting:'hello React x Node.js'})
})
// DB에서 학생 정보를 등록하는 API
router.get('/insert',(request,response)=>{
    console.log('/insert로 들어옴');
    response.send({greeting:'hello React x Node.js',insert:'insert'})
})
// DB에서 학생 정보를 검색 하는 API
router.get('/select',(request,response)=>{
    console.log('/select로 들어옴');
    response.send({greeting:'hello React x Node.js',select:'select'})
})
// DB에서 학생 정보를 수정하는 API
router.get('/update',(request,response)=>{
    console.log('/update로 들어옴');
    response.send({greeting:'hello React x Node.js',update:'update'})
})

// DB에서 학생 정보를 삭제하는 API
router.get('/delete',(request,response)=>{
    console.log('/delete로 들어옴');
    response.send({greeting:'hello React x Node.js',delete:'delete'})
})

module.exports = router;