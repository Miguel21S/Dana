import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { Users } from "../entities/models/users";

///////////////////////////// METHOD REGISTER //////////////////////////
const register = async (req: Request, res: Response) => {
    try {
        const name = req.body.name;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const password = req.body.password;

        const validPassword = /^(?=.*\d)(?=.*[!\"#\$%&'()*+,-./:;<=>?@[\\\]^_])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/
        if (password.length < 8) {
             res.status(404).json({
                sucess: false,
                message: 'Password must be longer than 8 characters'
            })
            return
        }

        if (!validPassword.test(password)) {
            res.status(404).json({
                sucess: false,
                message: 'La contraseña debe tener al menos un dígito, un carácter especial, una letra mayúscula, una letra minúscula y ningún espacio.'
            })
            return 
        }

        const validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if (!validEmail.test(email)) {
             res.status(404).json({
                sucess: false,
                message: 'Invalid email format'
            })
            return
        }

        const passwordEcrypted = bcrypt.hashSync(password, 8);

        await Users.create(
            {
                name: name,
                lastname: lastname,
                email: email,
                password: passwordEcrypted,
                role: {
                    id :2
                }
            }
        ).save();

        res.status(200).json({
            success: true,
            message: 'User created successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error registering user',
            error: error
        });

    }
}


///////////////////////////// METHOD LOGIN //////////////////////////
const login = async (req: Request, res: Response) => {
    try {
        const email = req.body.email
        const password = req.body.password;

        if (!email || !password) {
            res.status(404).json({
                success: false,
                message: 'Email and password are required'
            })
            return
        }

        const user = await Users.findOne({
            where:{
                email: email
            },
            relations:{
                role: true
            },
            select:{
                id:true,
                name:true,
                lastname:true,
                email:email,
                password:password,
            }
        })

        if(!user?.email){
            res.status(404).json({
                success: false,
                message: 'Invalid email or password'
            })
            return
        }

        const validPassword = await bcrypt.compare(password, user!.password);

        if(!validPassword){
            res.status(404).json({
                success: false,
                message: 'Invalid email or password'
            })
            return
        }

        const token = Jwt.sign(
            {
                roleId: user?.id,
                roleName: user?.role.name,
                user: user?.name
            },
            process.env.JWT_SECRET as string,
            {
                expiresIn: '1h'
            }
        )

        res.status(200).json(
            {
                success: true,
                message: 'User logged in successfully',
                token: token
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error logging in user',
            error: error
        })
        
    }
}

export { register, login };