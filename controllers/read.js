const connection = require("../config/database");
exports.read = (req, res) => {
  connection.query("SELECT * FROM studentdata", function (err, rows) {
    if (err) {
      res.status(400).json({
        status: false,
        message: "data is not found",
      });
    } else {
      res.status(200).json({
        status: true,
        message: "data found succesfully",
        data: rows,
      });
    }
  });
};
