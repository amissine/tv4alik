import { ChartOptions, defaultChartOptions } from './presenter/options'
import { ensureNotNull } from './helpers/assertions';
import { clone, isString, merge, DeepPartial } from './helpers/strict-type-checks';

/**
 * This function is the main entry point to the Custom Charts UI.
 * @param container - id of HTML element or element itself
 * @param options - any subset of ChartOptions to be applied at start.
 * @returns an interface to the created chart
 */
export function createChart(container: string | HTMLElement, options?: DeepPartial<ChartOptions>): IChart {
	const htmlElement = ensureNotNull(isString(container) ? document.getElementById(container) : container);
	const chartOptions = (options === undefined) ?
		clone(defaultChartOptions) :
		merge(clone(defaultChartOptions), options) as ChartOptions;

	return new Chart4alik(htmlElement, chartOptions);
}
