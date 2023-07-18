const connection = require("../config/database");
exports.update = (req, res) => {
    const { id } = req.params;
    const { name, email, subject, gender, message } = req.body;
    let sql = `update studentdata set name="${name}",email="${email}",subject="${subject}",gender="${gender}",message ="${message}" where id="${id}"`;
    connection.query(sql, function (err, result) {
        if (err) {
            return res.status(400).json({
                status: false,
                message: "student data not update succesfully !!!"
            })
        }
        else {
            return res.status(200).json({
                status: true,
                message:"student data update succesfully"
            })
        }
    })
}