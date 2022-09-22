import { Router } from "express";
import {deviceController} from '../controllers/deviceController.js';

export const deviceRouter = new Router();

deviceRouter.post('/', deviceController.create);
deviceRouter.get('/', deviceController.getAll);
deviceRouter.get('/:id', deviceController.getOne);