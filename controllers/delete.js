const connection = require("../config/database");

exports.deleteStudentData = (req, res) => {
    const { id } = req.params;
    let sql = `delete from studentdata where id=${id}`;
    connection.query(sql, function (err, result) {
        if (err) {
            return res.status(400).json({
                status: false,
                message: "data not delete succesfully !!!!"
            })
        }
        else {
            return res.status(200).json({
                status: true,
                data:result,
              message: "data not delete succesfully !!!!",
            });
        }
    })
};