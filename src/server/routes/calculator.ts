import { defineEventHandler, getQuery, getValidatedQuery, type Router } from "h3";

import { z } from "zod";

import Sum from '#modules/calculator/actions/sum';

export default (router: Router) => {
    router.get('/calculator/sum', defineEventHandler(async e => {
        const queryShape = z.object({
            n: z.coerce.number().array(),
        });

        const q = await getValidatedQuery(e, queryShape.parse);

        return Sum({ numbers: q.n });
    }));
};