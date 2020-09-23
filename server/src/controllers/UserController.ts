import { Request, Response} from 'express';

import db from '../database/connection';

const bcrypt = require('bcrypt');

export default class UserController {
    async create(request: Request, response: Response) {
        const { name, email, senha, avatar, whatsapp, bio } = request.body;

        bcrypt.hash(senha, 10, async (errBcrypt: Error, hash: String) => {
            if (errBcrypt) {
                return response.status(500).send( { error: errBcrypt } )
            }            

            const existsUser = await db('users')
                .select('users.*')
                .where('users.email', '=', email)

            //const trx = await db.transaction();

            try {

                if (existsUser.length > 0 || (name == "" || email == "" || senha == "")) {
                    return response.status(400).json({
                        error: 'Usuario ja cadastrado'
                    })
                }

                await db('users').insert({
                    name,
                    email,
                    senha: hash,
                    avatar,
                    whatsapp,
                    bio,
                });

                //await trx.commit();
        
                return response.status(201).send();
            } catch (err) {
                //await trx.rollback();
    
                return response.status(400).json({
                    error: 'Unexpected error while creating new User'
                })
            }

        });
    }

    async remove(request: Request, response: Response) {
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
            })

            await db('users').where('id', '=', user[0].id).delete();

            return response.status(200).send({ 
                mensagem: 'Usuario deletado',
            });

        } catch (err) {
            return response.status(401).send({
                mensagem: 'Erro na remocao do usuario'
            })
        }
    }

}