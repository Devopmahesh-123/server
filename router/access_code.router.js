import express from 'express';
import { accessCodeController} from '../controller/access_code.controller.js';

const access_code_routes = express.Router();

// Router to get the data of json file.
access_code_routes.post('/verify',accessCodeController);


export default access_code_routes;