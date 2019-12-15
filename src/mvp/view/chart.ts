import { ChartOptions } from '../util/options'
import { DeepPartial } from '../util/strict-type-checks'

export class ChartView {
  private _options: ChartOptions

  public constructor (container: HTMLElement, options: ChartOptions) {
    this._options = options
  }
  public applyOptions (options: DeepPartial<ChartOptions>): void {
  }
  public options (): Readonly<ChartOptions> {
    return this._options;
  }
}
