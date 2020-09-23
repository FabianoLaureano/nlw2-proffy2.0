import { Request, Response} from 'express';

import db from '../database/connection';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

export default class LoginController {
    async index(request: Request, response: Response) {
        const { email, senha } = request.body;

        try {
            
            const user = await db('users')
                .select('users.*')
                .where('users.email', '=', email)

            if (user.length < 1) {
                return response.status(401).send({
                    mensagem: 'Falha na autenticacao'
                })
            }

            bcrypt.compare(senha, user[0].senha, (err: Error, result: boolean) => {
                if (err) {
                    return response.status(401).send({ mensagem: 'Falha na autenticacao'});
                }
                if (result) {
                    const token = jwt.sign({
                        user_id: user[0].id,
                        user_email: email
                    }, 
                    "asasfasfs",
                    {
                        expiresIn: "1h"
                    });
                    return response.status(200).send({ 
                        mensagem: 'Autenticado com sucesso',
                        user: {
                            "name": user[0].name,
                            "avatar": user[0].avatar,
                            "email": email
                        },
                        token: token
                    });
                }

                return response.status(401).send({ mensagem: 'Falha na autenticacao'});
            })
            
        } catch (err) {
            return response.status(401).send({
                mensagem: 'Falha na autenticacao'
            })
        }

    }
}