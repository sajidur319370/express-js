let count = 0
getCount = (req, res, next) => {
    count++;
    console.log(count);
    res.send(`count done ${count}`);
    next();
}

module.exports = getCount;