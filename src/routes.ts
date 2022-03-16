import {Router} from "express";
import {Register} from "./controller/auth.controller";

export const routes = (router: Router) => {
    router.post('http://localhost/eventio-api/api/register.ts', Register);
}