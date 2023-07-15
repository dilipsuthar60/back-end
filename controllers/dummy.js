exports.dummyLink = (req, res) => {
    console.log("hello");
     res.status(200).send({
        status: 1,
        message:"succesfully done !!!",
    })
}