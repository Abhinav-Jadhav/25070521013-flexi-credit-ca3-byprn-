import mongoose from 'mongoose';
const schema = new mongoose.Schema({name:{type:String,required:true,trim:true,maxlength:80},description:{type:String,required:true,trim:true,maxlength:500},duration:{type:Number,required:true,min:15,max:240},price:{type:Number,required:true,min:0},category:{type:String,default:'General'},color:{type:String,default:'#7165e8'},active:{type:Boolean,default:true},availability:{start:{type:String,default:'09:00'},end:{type:String,default:'17:00'},days:{type:[Number],default:[1,2,3,4,5]}}},{timestamps:true});
export default mongoose.model('Service',schema);
