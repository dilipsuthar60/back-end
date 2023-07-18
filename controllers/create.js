const connection = require("../config/database");
exports.create = (req, res) => {
  const { name, email, subject, gender, message } = req.body;
  console.log("dilip");
  if (!name || !email || !subject || !gender || !message) {
    return res.status(401).json({
      status: false,
      message: "Something Went Wrong",
    });
  } else {
    let sql =
      "INSERT INTO studentdata (name, email,subject,gender,message) VALUES ?";
    let values = [[name, email, subject, gender, message]];
    connection.query(sql, [values], function (err, result) {
      if (err) {
        return res.status(401).json({
          status: false,
          message: err,
          value: values,
        });
      } else {
        return res.status(200).json({
          status: true,
          message: "Student Data Insert Succesfully !!!",
        });
      }
    });
  }
};

