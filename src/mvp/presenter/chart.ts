import { IChart } from './ichart'
import { ChartOptions } from '../util/options'
import { DeepPartial } from '../util/strict-type-checks'
import { MouseEventHandler } from '../util/misc'
import { UnifiedMarketFeed } from '../model/umf'
import { ChartView } from '../view/chart'

export class Chart4alik implements IChart {
  private _view: ChartView

  public constructor (container: HTMLElement, options: ChartOptions) {
    this._view = new ChartView(container, options) 
  }
  public remove (): void {
  }
  public resize (height: number, width: number, forceRepaint?: boolean): IChart {
    return this;
  }
  public pour (feed: ReadonlyArray<UnifiedMarketFeed>): IChart {
    return this;
  }
  public add (feed: ReadonlyArray<UnifiedMarketFeed>): IChart {
    return this;
  }
  public empty (): IChart {
    return this;
  }
  public subscribeClick (handler: MouseEventHandler): IChart {
    return this;
  }
  public unsubscribeClick (handler: MouseEventHandler): IChart {
    return this;
  }
  public subscribeCrosshairMove (handler: MouseEventHandler): IChart {
    return this;
  }
  public unsubscribeCrosshairMove (handler: MouseEventHandler): IChart {
    return this;
  }
  public applyOptions (options: DeepPartial<ChartOptions>): IChart {
    this._view.applyOptions(options)
    return this;
  }
  public options (): Readonly<ChartOptions> {
    return this._view.options();
  }
}
