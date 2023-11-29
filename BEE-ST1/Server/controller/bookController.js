const mongoose = require('mongoose')
const express = require('express')
const bookServices = require('../services/bookServices')

exports.createBook = async (req,res) => {
    const inputData = req.body;
    //console.log('inputData',inputData);
    const details = await bookServices.createBook(inputData);
    console.log('details', details);
}

exports.getBooks = async (req,res) => {
    const data = await bookServices.getBook()
    //console.log('data',data);
    res.status(200).json({data: data})
}
// exports.deletetask = async(req,res) => {
//     try{
//         const user= await taskfindOneAndDelete({taskno:req.body.taskno});
//         res.send(user);
//     }
//     catch(erro){
//         console.log("Error "+erro.message);

//     }
// }
// exports.updatetask = async (req,res) =>{
//     try{
//         const user=await task.findOneAndUpdate({taskno:req.body.taskno});
//         res.send(user);

//     }
//     catch(erro){
//         console.log("Error"+erro.message);
//     }
// }