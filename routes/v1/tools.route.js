const express = require('express');
const count = require("../../middleware/viewCount");
const router = express.Router();
const toolController = require('../../controller/tools.controller');
/*
router.get('/', (req, res) => {
    res.send("Tools found");
});


router.post('/', (req, res) => {
    res.send("tools added");
});*/

router.route('/')

    /**
     * @api {get} /tools All tools
     * @apiDescription Get all the tools
     * @apiPermission admin
     *
     * @apiHeader {String} Authorization   User's access token
     *
     * @apiParam  {Number{1-}}         [page=1]     List page
     * @apiParam  {Number{1-100}}      [limit=10]  Users per page
     *
     * @apiSuccess {Object[]} all the tools.
     *
     * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
     * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
     **/
    .get(toolController.getAllTools)
    /**
    * @api {get} /Save All tools
    * @apiDescription Save all the tools
    * @apiPermission admin
    *
    * @apiHeader {String} Authorization   User's access token
    *
    * @apiParam  {Number{1-}}         [page=1]     List page
    * @apiParam  {Number{1-100}}      [limit=10]  Users per page
    *
    * @apiSuccess {Object[]} all the tools.
    *
    * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
    * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
    **/
    .post(toolController.saveAtool)


router.route('/:id')
    .get(toolController.toolDetails)


module.exports = router;