import express from "express";

const app = express();
app.use(express.json())// to be able to read the body ----> middleware
// middleware --> app level, more that router instance, set of functions that runs after eachother,


// app.all('/', (req, res, next) => {
//   console.log('Accessing the secret section ...')
//   next() // pass control to the next handler
// });

app.get("/", (req, res) => {
    const student = req.body;
    res.send(student);
});

app.post("/calculate", (req, res, next)=>{
    if(typeof req.body.x !== 'number' || typeof req.body.y !== 'number') res.send(new Error())
    if( req.body.operation !== '+' || req.body.operation !== '-' || req.body.operation !== '*' || req.body.operation !== '/' ) res.send(new Error())
    next()
},
(req, res) => {
    const operation = req.body.operation;
    const firstNum = req.body.x;
    const secondNum = req.body.y;
    let result = 0;
    if(operation === "+") result = (firstNum + secondNum)
    if(operation === "-") result = (firstNum - secondNum)
    if(operation === "*") result = (firstNum * secondNum)
    if(operation === "/") result = (firstNum / secondNum)

    console.log(result)
    res.send({"Result" : result})
})

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});


app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`)
);