import { Router } from 'express';
import { typeOffice,officeById } from '../controllers/offices';
const officesRouter = new Router();
officesRouter.get("/offices/type/:id", typeOffice); //is office
officesRouter.get("/offices/:id", officeById); //office By Id
export default { officesRouter };