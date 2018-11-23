import { config as localhost } from './localhost';
import { config as dockercompose } from './dockercompose';

export interface IEnvConfig {
    baseUrl: string;
}

const env = process.env.ENV; // run "export ENV=dockercompose" to set variable and be able to run inside docker-compose

let conf: IEnvConfig;

switch (env) {
    case 'dockercompose':
        conf = dockercompose;
        break;

    case 'localhost':
    default:  // will run on localhost by default
        conf = localhost;
        break;
}

export { conf };
