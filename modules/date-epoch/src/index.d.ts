/**
 * Helpers to work with UNIX Epoch notation and JavaScript Date objects.
 *
 * This should be an almost exact copy of [1], notice how strict typing had been added.
 *
 * [1]: https://bitsrc.io/renoirb/bindings/types/date-epoch/code
 */
export default class DateEpoch {
  epoch: number
  constructor(arg: any)
  toJSON(): {
    epoch: number
  }
  toString(): number
  toDate(): Date
}
export declare const getDateFromEpoch: (epoch?: number) => Date
/**
 * Ensure we get milliseconds out of some UNIX Epoch.
 *
 * If an UNIX Epoch is already in milliseconds return the same value;
 * If an UNIX Epoch is close enough, and within hoursTreshold limit, multiply by 1000.
 */
export declare const toMilliseconds: (
  maybeMilliseconds?: number,
  hoursTreshold?: number
) => number
export declare const getDaysAgoToMilliseconds: (days?: number) => number
export declare const getMillisecondsToDaysAgo: (ms?: number) => number
export declare const getTimeNowUtcMillliseconds: () => number
export declare const getTimeDaysAgoMilliseconds: (
  endTimeMilliseconds: number,
  days?: number
) => number
export declare const getDaysAgoMillisecondsAsTuple: (
  days?: number
) => [number, number]
export declare const getDeltaDaysAgoFromNowUtcMilliseconds: (
  days?: number
) => number
