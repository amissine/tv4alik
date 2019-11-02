import { PricedValue } from '../model/price-scale';
import { SeriesItemsIndexesRange, TimedValue } from '../model/time-data';

import { LinePoint, LineStyle, LineType, LineWidth, setLineStyle } from './draw-line';
import { IPaneRenderer } from './ipane-renderer';
import { walkLine } from './walk-line';

export type LineItem = TimedValue & PricedValue & LinePoint;

export interface PaneRendererLineData {
	lineType: LineType;

	items: LineItem[];

	lineColor: string;
	lineWidth: LineWidth;
	lineStyle: LineStyle;

	visibleRange: SeriesItemsIndexesRange | null;
}

export class PaneRendererLine implements IPaneRenderer {
	protected _data: PaneRendererLineData | null = null;

	public setData(data: PaneRendererLineData): void {
		this._data = data;
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		if (this._data === null || this._data.items.length === 0 || this._data.visibleRange === null) {
			return;
		}

		ctx.lineCap = 'square';
		ctx.lineWidth = this._data.lineWidth;

		setLineStyle(ctx, this._data.lineStyle);

		ctx.strokeStyle = this._data.lineColor;
		ctx.lineJoin = 'miter';

		ctx.beginPath();
		walkLine(ctx, this._data.items, this._data.lineType, this._data.visibleRange);
		ctx.stroke();

		this._drawAmounts(ctx, this._data.items, this._data.visibleRange);
	}

	private _drawAmounts(
		ctx: CanvasRenderingContext2D,
		points: ReadonlyArray<LinePoint>,
		visibleRange: SeriesItemsIndexesRange
  ): void {
		if (points.length === 0) {
			return;
		}

		ctx.beginPath();
		for (let i = visibleRange.from; i < visibleRange.to; ++i) {
			const currItem = points[i];
			if (i % 2) {
				ctx.moveTo(currItem.x, 0);
				ctx.lineTo(currItem.x, 200);
			} else {
				ctx.moveTo(currItem.x, ctx.canvas.height);
				ctx.lineTo(currItem.x, ctx.canvas.height - 100);
			}
		}
		ctx.stroke();
	}
}
