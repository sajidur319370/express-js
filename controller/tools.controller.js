module.exports.getAllTools = (req, res) => {
    // res.send("Tools found");
    res.json({ "name": "SAJID" })
}

module.exports.saveAtool = (req, res) => {
    res.send("tools added");
}

module.exports.toolDetails = (req, res) => {
    res.send('Tools detail found');
}