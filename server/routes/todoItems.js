const express = require("express");
const router = express.Router();
const todoItemsModel = require("../models/todoModel");
const { getItems, createItem, updateItem, deleteItem } = require("../controller/todoItemController");


router.route("/").post(createItem).get(getItems);
router.route("/:id").put(updateItem).delete(deleteItem);



module.exports = router;