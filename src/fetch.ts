import https from 'https';
import http from 'node:http';

interface IFetch {
    json: any
}

const fetch = (url: string): Promise<IFetch> => {
    return new Promise(resolve => {
        const callback = (response: http.IncomingMessage) => {
            let str = '';
            response.on('data', (chunk) => {
                str += chunk;
            });
            response.on('end', () => {
                resolve({
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    json: JSON.parse(str)
                });
            });
        }
        const request = https.request(url, callback);
        request.end();
    });
}

export default fetch;