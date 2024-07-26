import {Router} from 'express';
import {registerUserData} from '../Controllers/Users.controller.js';



const router = Router();




router.route("/reservationData").post(registerUserData);




export default router;