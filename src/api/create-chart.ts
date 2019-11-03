import { ensureNotNull } from '../helpers/assertions';
import { clone, DeepPartial, isString, merge } from '../helpers/strict-type-checks';

import { ChartOptions } from '../model/chart-model';

import { Chart } from './chart';
import { IChart } from './ichart';
import { chartOptionsDefaults } from './options/chart-options-defaults';

export { LineStyle, LineType, LineWidth } from '../renderers/draw-line';

export { BarPrice } from '../model/bar';
export { CrosshairMode } from '../model/crosshair';
export { PriceScaleMode } from '../model/price-scale';
export { UTCTimestamp } from '../model/time-data';

export { IChart, MouseEventParams } from './ichart';
export { ISeriesApi } from './iseries-api';

export {
	BarData,
	HistogramData,
	isBusinessDay,
	isUTCTimestamp,
	LineData,
} from './data-consumer';

/**
 * This function is the main entry point of the Lightweight Charting Library
 * @param container - id of HTML element or element itself
 * @param options - any subset of ChartOptions to be applied at start.
 * @returns an interface to the created chart
 */
export function createChart(container: string | HTMLElement, options?: DeepPartial<ChartOptions>): IChart {
	const htmlElement = ensureNotNull(isString(container) ? document.getElementById(container) : container);
	const chartOptions = (options === undefined) ?
		clone(chartOptionsDefaults) :
		merge(clone(chartOptionsDefaults), options) as ChartOptions;

	return new Chart(htmlElement, chartOptions);
}
