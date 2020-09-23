import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UserController from './controllers/UserController';
import LoginController from './controllers/LoginController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsController = new ConnectionsController();
const userController = new UserController();
const loginController = new LoginController();

routes.post('/login', loginController.index);

routes.post('/users', userController.create);
routes.delete('/users', userController.remove);

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;