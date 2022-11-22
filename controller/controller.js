export const getHomepage = (req, res) => {
    res.render('../public/index.ejs')
}

export const getAllUser = (req, res) => {
    res.send("userlist")
}

export const createNewUser = (req, res) => {
    res.json({msg: "new user created"})
}