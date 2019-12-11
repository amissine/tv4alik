/// <reference types="_build-time-constants" />
/*
export { LineStyle, LineType, LineWidth } from './renderers/draw-line';

export { BarPrice } from './model/bar';
export { CrosshairMode } from './model/crosshair';
export { PriceScaleMode } from './model/price-scale';
export { UTCTimestamp } from './model/time-data';

export {
	BarData,
	HistogramData,
	isBusinessDay,
	isUTCTimestamp,
	LineData,
} from './api/data-consumer';
export { IChart, MouseEventParams } from './api/ichart';
export { ISeriesApi } from './api/iseries-api';
 */
export { createChart } from './mvp/api/create-chart';

export function version(): string {
	return process.env.BUILD_VERSION;
}
