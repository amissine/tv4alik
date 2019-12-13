import { ChartOptions } from './options'
import { DeepPartial } from '../helpers/strict-type-checks'

/**
 * The API of a custom chart.
 */
export interface IChart {
	/**
	 * Remove the chart object(s) from DOM (irreversible operation).
	 */
	remove(): void;

	/**
	 * Set fixed size of the chart. By default chart takes up 100% of its container.
	 * @param height - target height of the chart
	 * @param width - target width of the chart
	 * @param forceRepaint - true to initiate resize immediately. One could need this to get screenshot immediately after resize
	 * @returns the chart (for chaining)
	 */
	resize (height: number, width: number, forceRepaint?: boolean): IChart

	/**
	 * Fill the chart with initial feed.
	 * @param feed - the initial feed
	 * @returns the chart (for chaining)
	 */
	pour (feed: UnifiedMarketFeed): IChart

	/**
	 * Add more feed to the chart.
	 * @param feed - the feed to add
	 * @returns the chart (for chaining)
	 */
	add (feed: UnifiedMarketFeed): IChart

	/**
	 * Remove all feed from the chart (irreversible operation).
	 * @returns the chart (for chaining)
	 */
	empty (): IChart

	/**
	 * Adds a subscription to mouse click event
	 * @param handler - handler (function) to be called on mouse click
	 * @returns the chart (for chaining)
	 */
	subscribeClick(handler: MouseEventHandler): void;

	/**
	 * Removes mouse click subscription
	 * @param handler - previously subscribed handler
	 * @returns the chart (for chaining)
	 */
	unsubscribeClick(handler: MouseEventHandler): void;

	/**
	 * Adds a subscription to crosshair movement to receive notifications on crosshair movements
	 * @param handler - handler (function) to be called on crosshair move
	 * @returns the chart (for chaining)
	 */
	subscribeCrosshairMove(handler: MouseEventHandler): void;

	/**
	 * Removes a subscription on crosshair movement
	 * @param handler - previously subscribed handler
	 * @returns the chart (for chaining)
	 */
	unsubscribeCrosshairMove(handler: MouseEventHandler): void;

	/**
	 * Adds a subscription to visible range changes to receive notification about visible range of data changes
	 * @param handler - handler (function) to be called on changing visible data range
	 * @returns the chart (for chaining)
	 */
	subscribeVisibleTimeRangeChange(handler: TimeRangeChangeEventHandler): void;

	/**
	 * Removes a subscription to visible range changes
	 * @param handler - previously subscribed handler
	 * @returns the chart (for chaining)
	 */
	unsubscribeVisibleTimeRangeChange(handler: TimeRangeChangeEventHandler): void;

	/**
	 * Returns API to manipulate the price scale
	 * @returns - target API
	 */
	priceScale(): IPriceScaleApi;

	/**
	 * Returns API to manipulate the time scale
	 * @returns - target API
	 */
	timeScale(): ITimeScaleApi;

	/**
	 * Applies new options to the chart
	 * @param options - any subset of chart options
	 * @returns the chart (for chaining)
	 */
	applyOptions(options: DeepPartial<ChartOptions>): void;

	/**
	 * Returns currently applied options
	 * @returns - full set of currently applied options, including defaults
	 */
	options(): Readonly<ChartOptions>;

	/**
	 * Make a screenshot of the chart with all the elements excluding crosshair.
	 * @returns a canvas with the chart drawn on
	 */
	takeScreenshot(): HTMLCanvasElement;
}
