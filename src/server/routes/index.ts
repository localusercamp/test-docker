import { defineEventHandler, type Router } from "h3";

import { hello } from '../../app/hello';

export default (router: Router) => {
    router.get('/', defineEventHandler(e => {
        return hello();
    }));
};
