import { Router, Request, Response, NextFunction } from "express";

const apiRouter: Router = Router();

const heroes = [{id: 1, name: "Mahesh Vangala"}, {id: 2, name: "Neo Vangala"}, {id:3, name: "Naveena Vangala"}];

apiRouter.get('/heroes', function(req: Request, res: Response, next: NextFunction){
    res.json(heroes);
});

apiRouter.post('/hero', function(req: Request, res: Response, next: NextFunction) {
    var token = -1;
    for(var i = 0; i < heroes.length; i++) {
        if(heroes[i].id == req.body.id) {
            token = i;
            break;
        }
    }
    heroes[token] = {id: req.body.id, name: req.body.name};
    res.status(200);
    res.send();
});

export { apiRouter }
