const asyncHandler = require("express-async-handler");
const todoItemsModel = require("../models/todoModel");

const createItem = asyncHandler(async (req, res) => {
    try {
        const newItem = new todoItemsModel ({
            item: req.body.item
        })
        const saveItem = await newItem.save();
        res.status(200).json(saveItem)
      } catch(err) {
        res.json(err)
      }
})


const getItems = asyncHandler(async (req, res) => {
    try {
        const allItems = await todoItemsModel.find({});
        res.status(200).json(allItems)
      } catch(err) {
        res.json(err)
      }
})

const updateItem = asyncHandler(async (req, res) => {
  try {
      const updateOne = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
      res.status(200).json("item updated");
    } catch(err) {
      res.json(err)
    }
})

const deleteItem = asyncHandler(async (req, res) => {
  try {
      const deleteOne = await todoItemsModel.findByIdAndDelete(req.params.id);
      res.status(200).json("item deleted");
    } catch(err) {
      res.json(err)
    }
})



module.exports = { 
  getItems, 
  createItem, 
  updateItem,
  deleteItem,
        }