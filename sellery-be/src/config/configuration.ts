import * as process from 'node:process';

export default () => ({
    port: parseInt(process.env.API_PORT || "", 10) || 3000,
    database: process.env.DATABASE || ""
});

/*
export interface Config {
    nest: NestConfig;
    cors: CorsConfig;
    security: SecurityConfig;
}

export interface NestConfig {
    port: number;
}
export interface CorsConfig{
    enabled: boolean;
}
export interface SecurityConfig {
    expiresIn: string;
    refreshIn: string;
    bcryptSaltOrRound: string | number;
}*/
