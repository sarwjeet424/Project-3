const express=require('express') 
const { bookController, getBooks, getBookReviewData ,updateBook ,deleteBook } = require('../controllers/bookController')
const router= express.Router()
const {authentication,authorisation} =require('../middleware/auth')
const {userController,login}=require('../controllers/userController')


router.post('/register',userController)

router.post('/login',login)

router.post('/books',authentication,authorisation,bookController)

router.get('/books',authentication,getBooks)

router.get('/books/:bookId',authentication,getBookReviewData)

router.put('/books/:bookId',authentication,authorisation,updateBook)

router.delete('/books/:bookId',authentication,authorisation,deleteBook)

router.all("/*",function (req,res){
    return res.status(404).send({status:false,message:"Page not found"})
})

module.exports=router