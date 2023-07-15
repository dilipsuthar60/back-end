exports.create = (req, res)=> {
    const { name, password } = req.body;
    if (!name || !password) {
        return res.status(401).json({
            status: false,
            message: "Something Went Wrong"
            
        })
    }
    else {
          return res.status(200).json({
            status: true,
            message:"Succesfully !!!!!!"
        })
    }
}