import 'dotenv/config';import express from 'express';import cors from 'cors';import mongoose from 'mongoose';
import services from './routes/services.js';import availability from './routes/availability.js';import bookings from './routes/bookings.js';
const app=express(),port=process.env.PORT||5000;app.use(cors({origin:process.env.CLIENT_ORIGIN||'http://localhost:5173'}));app.use(express.json({limit:'1mb'}));
app.get('/api/health',(_req,res)=>res.json({status:'ok',database:mongoose.connection.readyState===1?'connected':'disconnected'}));app.use('/api/services',services);app.use('/api/availability',availability);app.use('/api/bookings',bookings);app.use((_req,res)=>res.status(404).json({message:'Route not found.'}));
app.use((err,_req,res,_next)=>{console.error(err);const status=err.name==='ValidationError'?400:500;res.status(status).json({message:status===400?err.message:'Something went wrong on the server.'});});
mongoose.connect(process.env.MONGODB_URI||'mongodb://127.0.0.1:27017/flexi_booking').then(()=>app.listen(port,()=>console.log(`FLEXI API running at http://localhost:${port}`))).catch(e=>{console.error('MongoDB connection failed:',e.message);process.exit(1);});
