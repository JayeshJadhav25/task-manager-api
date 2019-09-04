const express=require('express')
require('./db/mongoose')
const User=require('./models/user')
const Task=require('./models/task')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')

const app=express()
const port=process.env.PORT 

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log('Server is up on port 3000')
})

// const multer=require('multer')
// const upload=multer({
//     dest:'images',
//     //limit the file size 1mb
//     limits:{
//         fileSize:1000000
//     },
//     fileFilter(req,file,cb){
//         //It Only accept pdf file
//         // if(!file.originalname.endsWith('.pdf')){
//         //     return cb(new Error('Please upload a pdf file'))
//         // }

//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a word file'))
//         }
//         cb(undefined,true)
//     }
// })
// app.post('/upload',upload.single('upload'),(req,res)=>{
//     res.send()
// },(error,req,res,next)=>{
//     res.status(400).send({error:error.message})
// })




// app.use((req,res,next)=>{
//     if(req.method==="GET"){
//         res.send('GET requests are disabeled')
//     }else{
//         next()
//     }
// })

// app.use((req,res,next)=>{
//     res.status(503).send('Server is under maintenance')
// })







//const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const myFunction=async()=>{
    const token=jwt.sign({_id:'abc123'},'thisismytoken')    
    console.log(token)

    const data=jwt.verify(token,'thisismytoken')
    console.log(data)
    // const password='Jayesh123'
    // const hashedPassword=await bcrypt.hash(password,8)

    // console.log(password)
    // console.log(hashedPassword)

    // const isMatch=await bcrypt.compare('Jayesh123',hashedPassword)
    // console.log(isMatch) 
}


myFunction()
