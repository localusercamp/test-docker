import { defineEventHandler } from 'h3';

import type { EventHandler, EventHandlerRequest, Router, RouterMethod } from 'h3';

export function defineAction<
    TRequest extends EventHandlerRequest = EventHandlerRequest,
    TResponse extends unknown = any
>(
    method: RouterMethod | RouterMethod[],
    route: string,
    handler: EventHandler<TRequest, TResponse>
) {
    return (router: Router) => {
        router.add(route, defineEventHandler(handler), method);
    };
}
