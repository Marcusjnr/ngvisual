const mongoose = require("mongoose");


mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(success => console.log("Connection to mongoose successful"))
    .catch(err => console.error("Could not connect to mongoose ", err));


// mongoose.connect('mongodb://127.0.0.1:27017/ng_visuals',{
//     useNewUrlParser:true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// });
