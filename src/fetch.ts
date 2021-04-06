/*
import https from "https";

interface IFetchResponse {
    json: any
}

const fetch = async (url: string): Promise<IFetchResponse> => {
    https.get(url, (res) => {
        res.on('data', (d) => {
            process.stdout.write(d);
        });
        res.on('end', () => {
        })
    }).on('error', (e) => {
        console.error(e);
    }).end();
}

export default fetch;*/
