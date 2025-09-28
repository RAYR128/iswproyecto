// api pequeña para probar
const express=require("express");
const path=require("path");
const app=express();
const PORT=process.env.PORT;

app.use(express.json());

app.get("/api/prueba",(req,res)=>{ res.json({ok:true, msg:"funcionando!"}); });

// rebotar lo que se envio
app.post("/api/echo",(req,res)=>{ res.json({youSent:req.body||null}); });

app.listen(PORT,()=>{
	console.log(`abierto en port ${PORT}`);
});
