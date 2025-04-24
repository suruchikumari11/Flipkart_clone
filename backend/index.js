import app from './app.js'
import db from './db.js'


app.listen(process.env.PORT || 8000,()=>{
    console.log(`connect to port ${process.env.PORT}`)
})