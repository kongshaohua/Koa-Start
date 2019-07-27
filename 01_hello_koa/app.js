var koa=require('koa');
var app=new koa();
app.use(async(ctx)=>{
    ctx.body='Hello koa!';
})
app.listen(8000);
