import { hello } from '../../../app/utils/hello';

export default eventHandler((event) => {
    return hello();
});
