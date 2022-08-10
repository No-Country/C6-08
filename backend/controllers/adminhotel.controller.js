const bcrypt = require('bcryptjs')

const { AdminHotel } = require('../models/adminhotel.models')
const { catchAsync} = require('../util/catchAsync')
const { AppError } = require('../util/AppError')
const { filterObject } = require('../util/filterObject')

exports.getAllAdminHotel = catchAsync( async (req, res, next) =>{

    const allAdminHotel = await AdminHotel.findAll({where: { status: 'active'}})

        if(!allAdminHotel) {
            return next(new AppError(404, 'There are not adminUsers until.'))
        }  
        // allAdminHotel.password = undefined
        res.status(200).json({
            status: 'Success',
            data: {allAdminHotel}
        })
}  ) 

exports.getAdminHotelById = async (req, res) => {
    const { id } = req. params
    const adminHotel = await AdminHotel.findOne({where: { id, status:'active'}})
    if(!adminHotel){
        res.status(404).json({
            status: 'Error',
            message: 'The delivered Id was not found.'
        })
        return
    }
    adminHotel.password = undefined
    res.status(201).json({
        status:'Success',
        data: { adminHotel }
    })
}

exports.postAdminHotel = async (req,res) => {
    try {
        const { name, email, password } = req.body
        if(!name || !email || !password || name.length===0 || email.length===0 || password.length===0){
            res.status(400).json({
                status: 'Error',
                message: 'Some properties and/or their values are inconrrect.'
            })
            return
        }

        const salt = await bcrypt.genSaltSync(12)
        const hashpassword = await bcrypt.hash(password, salt)
        
        const adminHotel = await AdminHotel.create({
            name,
            email,
            password: hashpassword
        })

        adminHotel.password= undefined
        res.status(201).json({
            status: 'Success',
            data: { adminHotel }
        })
    } 
    catch (error) {
        console.log(error);
    }
}

exports.patchAdminHotelById = catchAsync(async (req, res, next) => {
    const { id } = req.params
    const adminHotel = await AdminHotel.findOne({ where: {id, status:'active'}})
    if(!adminHotel){
        return next(new AppError(404, 'The delivered id was not found.'))
    }
    const data = filterObject(req.body, "name", "email")
    await adminHotel.update({...data, ...req.Body})
    res.status(204).json({status:'Success'})
}) 

exports.deleteAdminHotelById = catchAsync( async ( req, res, next) => {

    const { id } = req.params
    const userAdmin = await AdminHotel.findOne({where: {id, status: 'active'}})

    if(!userAdmin) {
        return next(new AppError(404, 'There are not adminUser until.'))
    }  
    await userAdmin.update({status: 'deleted'})
    res.status(204).json({
        status: "succes"
    })

})
