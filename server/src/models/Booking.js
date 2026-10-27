import mongoose from 'mongoose';
const schema = new mongoose.Schema({service:{type:mongoose.Schema.Types.ObjectId,ref:'Service',required:true},serviceName:{type:String,required:true},customerName:{type:String,required:true,trim:true,maxlength:100},email:{type:String,required:true,trim:true,lowercase:true},phone:{type:String,default:''},date:{type:String,required:true},time:{type:String,required:true},duration:{type:Number,required:true},price:{type:Number,required:true},notes:{type:String,default:'',maxlength:500},status:{type:String,enum:['confirmed','cancelled','completed'],default:'confirmed'}},{timestamps:true});
schema.index({service:1,date:1,status:1});
export default mongoose.model('Booking',schema);
