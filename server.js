const http=require('http')




 const  server= http.createServer((req,res)=>{
res.write('welcome\n')
res.write('eya in node world')
res.statusCode=200
res.write('hi')
res.end()
 } )//function 
server.listen(5000,()=>{console.log('server running')})