const mongoose=require('mongoose')
const validator=require('validator')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true
})

// const User=mongoose.model('User',{
//     name:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     passsword:{
//         type:String,
//         required:true,
//         minlength:7,
//         trim:true,
//         validate(value){
//             if(value.toLowerCase().includes('passsword')){
//                 throw new Error('Passowrd cannot contain password')
//             }
//         }  
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid')
//             }
//         }
//     },  
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be positive')
//             }
//         }
//     }
// })

// const me =new User({
//     name:'Jayesh Jadhav ',
//     email:'JAEYSHJADHAV@GMAIL.COM',
//     age:21,
//     passsword:'jayesh123'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error',error)
// })


// const Task=mongoose.model('Task',{
//     description:{
//         type:String,
//           required:true,
//          trim:true 
//     },
//     completed:{
//         type:Boolean,
//          default:false
//     }
// })
// const task=new Task({
//     description:'mongoose library',
//     completed:true
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })