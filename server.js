const app = require("./app")
console.log(`environment running in ${app.get('env')}`)
console.log(process.env);
app.listen("3000", ()=>{
    console.log("server started.....")
});