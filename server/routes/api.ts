import { Router, Request, Response, NextFunction } from "express";

const apiRouter: Router = Router();

const heroes = [{id: 1, name: "Mahesh Vangala"}, {id: 2, name: "Neo Vangala"}, {id:3, name: "Naveena Vangala"}];

apiRouter.get('/heroes', function(req: Request, res: Response, next: NextFunction){
    res.json(heroes);
});

export { apiRouter }
