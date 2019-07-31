import User from '../models/users';
import Sequelize from 'sequelize';
const Op = Sequelize.Op;

export async function getUsers(req, res) {
    try{
        let getdata = await User.findAll(req.body);
        if(getdata){           
            res.json({
                success: true,
                message:"User Fetch Successfully",
                data:getdata
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message:"Something went wrong!"
        })
    }
}


export async function getUser(req, res) {
    try{
        let createdata = await User.findOne({ where: req.body});
        if(createdata){
            res.json({
                success: true,
                message:"User fetch Successfully",
                data:createdata
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message:"Something went wrong!"
        })
    }
}

export async function createUser(req, res) {
    try{
        let checkdata = await User.findOne({where:{email:req.body.email}});
        console.log(checkdata);
        if(checkdata){
            res.json({
                message:"Already Exist",
                data:checkdata
            });
        }else{
            let createdata = await User.create(req.body, {
                fields: ['name', 'email', 'password', 'phone', 'profile_pic']
            });
            if(createdata){
                res.json({
                    success: true,
                    message:"User Created Successfully",
                    data:createdata
                });
            }
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message:"Something went wrong!"
        })
    }
}

export async function deleteUser(req, res) {
    try{
        let deletedata = await User.destroy({
            where:{
                id:req.body.id
            }
        });
        if(deletedata){
            res.json({
                success: true,
                message:"User Created Successfully",
                data:deletedata
            });
        }
    }catch(err){
        res.status(500).json({
            success: false,
            message:"Something went wrong!"
        })
    }
}


export async function updateUsers(req, res) {
    try{
        let finddata = await User.findAll({
            where:{
                id:req.body.id
            }
        });
        if(finddata.length > 0){
            finddata.forEach(async data =>{
                await data.update(req.body)
            })
        }
        return res.json({
            success: true,
            message:"User Created Successfully",
            data:finddata
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message:"Something went wrong!"
        })
    }
}
