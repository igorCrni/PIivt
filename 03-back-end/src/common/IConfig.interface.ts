import IRouter from "./IRouter.interface";

export interface IMailConfiguration {
    host: string,
    port: number,
    email: string,
    password: string,
    debug: boolean,
}

interface IConfig {
    server: {
        port: number;
        static: {
            index: string|false;
            dotfiles: "allow"|"deny";
            cacheControl: boolean;
            etag: boolean;
            maxAge: number;
            route: string;
            path: string;
        }
    },
    logging: {
        path: string,
        filename: string,
        foramt: string,
    },
    database: {
        host: string,
        port: number,
        user: string,
        password: string,
        database: string,
        charset: 'utf8' | 'utf8mb4' | 'ascii',
        timezone: string,
        //supportBigNumbers: boolean,
    },
    routers: IRouter[],

    mail: IMailConfiguration,

    fileUploads: {
        maxFiles: number,
        maxFileSize: number,
        tempFileDirectory: string,
        destinationDirectoryRoot: string,
        photos: {
            allowedTypes: string[],
            allowedExtensions: string[],
            width: {
                min:number,
                max:number,
            },
            height: {
                min:number,
                max:number,
            }
        },
    }
}

export default IConfig;
