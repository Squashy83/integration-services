import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import { errorMiddleware } from './middlewares/error';
import { authenticationRouter, channelInfoRouter, channelRouter, subscriptionRouter, ssiRouter } from './routes/router';
import { MongoDbService } from './services/mongodb-service';
import { CONFIG } from './config';
import morgan from 'morgan';
import { setupApi } from './setup';

function useRouter(app: express.Express, prefix: string, router: express.Router) {
	console.log(router.stack.map((r) => `${Object.keys(r?.route?.methods)?.[0].toUpperCase()}  ${prefix}${r?.route?.path}`));
	app.use(prefix, router);
}

async function startServer() {
	// setup did for server if not exists
	await setupApi();

	const app = express();
	const port = CONFIG.port;
	const dbUrl = CONFIG.databaseUrl;
	const dbName = CONFIG.databaseName;
	const version = CONFIG.apiVersion;
	const loggerMiddleware = morgan('combined');

	app.use(express.json({ limit: '10mb' }));
	app.use(express.urlencoded({ limit: '10mb', extended: true }));
	app.use(loggerMiddleware);

	const prefix = `/api/${version}`;
	useRouter(app, prefix + '/channel-info', channelInfoRouter);
	useRouter(app, prefix + '/channel', channelRouter);
	useRouter(app, prefix + '/subscriptions', subscriptionRouter);
	useRouter(app, prefix + '/ssi', ssiRouter);
	useRouter(app, prefix + '/authentication', authenticationRouter);

	app.use(errorMiddleware);
	app.listen(port, async () => {
		console.log(`Started API Server on port ${port}`);
		await MongoDbService.connect(dbUrl, dbName);
	});
}
startServer();
