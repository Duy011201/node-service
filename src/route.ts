import { ServerRoute } from '@hapi/hapi';
import { getHello } from './controller/helloController';

const route: ServerRoute[] = [
    {
        method: 'GET',
        path: '/',
        handler: getHello
    }
];

export default route;