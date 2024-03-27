const express = require("express")
const path = require("path")
const app = express()
const PORT = 8989
const rootPageCounter = 99
// app.use(express.static(path.join(__dirname, "..", "build")));


app.use(express.static("public"))
app.set('myvar', 'My Site')
app.get("/about", function (req, res) {
    var myvar = "Hello";
    res.render("index", { myvar1: myvar }); // send the variable through render method from res.
});




// app.use((req, res, next) => {
//     res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });
app.listen(PORT, () => {
    console.log(`${new Date()} INFO: server started, port: ${PORT}`)
})