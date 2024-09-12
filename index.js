const jsonServer=require('json-server')
const mdbServer=jsonServer.create()
const middleware=jsonServer.defaults()
const router=jsonServer.router('db.json')

mdbServer.use(middleware)
mdbServer.use(router)

const PORT=3000 || process.env.PORT

mdbServer.listen(PORT,()=>{
    console.log("server running at:"+PORT);
    
})