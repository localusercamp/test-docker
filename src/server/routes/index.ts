import { hello } from '#app/hello.ts';

export default eventHandler((event) => {
    return hello();
});
