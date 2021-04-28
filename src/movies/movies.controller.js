const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
    const movies = await service.list();
    res.json({data: movies})
}

module.exports = {
    list: asyncErrorBoundary(list),
}