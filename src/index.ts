/// <reference types="_build-time-constants" />
export { createChart } from './mvp/create-chart';

export function version(): string {
	return process.env.BUILD_VERSION;
}
