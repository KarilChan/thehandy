import https from 'https';
import http from 'node:http';

const fetch = (url: string): Promise<any> => {
    return new Promise(resolve => {
        const callback = (response: http.IncomingMessage) => {
            let str = '';
            response.on('data', (chunk) => {
                str += chunk;
            });
            response.on('end', () => {
                resolve(JSON.parse(str));
            });
        }
        const request = https.request(url, callback);
        request.end();
    });
}

export default fetch;