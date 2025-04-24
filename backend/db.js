import mongoose from "mongoose";

main().then(()=>{
  console.log("connect to db")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/aapna_fashion')
}
export default main;





