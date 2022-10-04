import postgres from 'postgres';
import { env } from '$env/dynamic/private';

const sql = postgres(env.POSTGRES_CONNECTION_URL as string);

export default sql;
