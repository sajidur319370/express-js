const tools =
    [{ "id": 1, "name": "Karalynn" },
    { "id": 2, "name": "Willdon" },
    { "id": 3, "name": "Vivienne" },
    { "id": 4, "name": "Hannie" },
    { "id": 5, "name": "Corabella" },
    { "id": 6, "name": "Suki" },
    { "id": 7, "name": "Carly" },
    { "id": 8, "name": "Aprilette" },
    { "id": 9, "name": "Will" },
    { "id": 10, "name": "Collin" }];



module.exports.getAllTools = (req, res) => {
    // res.send("Tools found");

    const { limit, page } = req.query;
    // console.log(limit, page);
    res.json(tools.slice(0, limit));
}

module.exports.saveAtool = (req, res) => {
    res.send("tools added");
}

module.exports.toolDetails = (req, res) => {
    const { id } = req.params;
    //console.log(id);
    const foundTool = tools.find(tool => tool.id === Number(id))
    res.send(foundTool);
}