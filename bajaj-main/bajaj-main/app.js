import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  const numbers = [];
  const alphabets = [];
  for (let x of data) {
    if (!isNaN(x)) numbers.push(x);
    else alphabets.push(x);
  }

  res.status(200).json({
    is_success: true,
    user_id: "full_name_ddmmyyyy",
    email: "registered_mail",
    roll_number: "rollnumber",
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: [alphabets.sort()[alphabets.length - 1]],
  });
});

app.get("/bfhl", (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
});

app.listen(3000, () => {
  console.log("Listening....");
});
