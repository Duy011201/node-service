import { Request, ResponseToolkit } from '@hapi/hapi';

export const getHello = (request: Request, h: ResponseToolkit) => {
    return h.response({ message: 'Hello, Hapi with TypeScript!' }).code(200);
};