/**
 * Helpers to work with UNIX Epoch notation and JavaScript Date objects.
 *
 * This should be an almost exact copy of [1], notice how strict typing had been added.
 *
 * [1]: https://bitsrc.io/renoirb/bindings/types/date-epoch/code
 */
export default class DateEpoch {
  public epoch: number
  constructor(arg: any) {
    switch (true) {
      case Number.isFinite(arg):
        this.epoch = toMilliseconds(parseInt(arg))
        break
      case Reflect.has(arg, 'getTime'):
        this.epoch = arg.getTime()
        break
      default:
        const ms = getTimeNowUtcMillliseconds()
        this.epoch = ms
        break
    }
  }

  toJSON() {
    return {
      epoch: this.epoch,
    }
  }

  toString() {
    return this.epoch
  }

  toDate() {
    return getDateFromEpoch(this.epoch)
  }
}

export const getDateFromEpoch = (epoch: number = 1539112235) => {
  let ensureMillisecondsInt = toMilliseconds(epoch)
  return new Date(ensureMillisecondsInt)
}

/**
 * Ensure we get milliseconds out of some UNIX Epoch.
 *
 * If an UNIX Epoch is already in milliseconds return the same value;
 * If an UNIX Epoch is close enough, and within hoursTreshold limit, multiply by 1000.
 */
export const toMilliseconds = (
  maybeMilliseconds: number = 0,
  hoursTreshold: number = 25
): number => {
  const ms = new Date().getTime()
  // const millisecondsDigitCount = ((ms).toString()).length
  const seconds = Math.floor(ms / 1000)
  const secondsDigitCount = seconds.toString().length
  const isExpressedInSeconds =
    maybeMilliseconds.toString().length === secondsDigitCount
  // const isExpressedInMilliSeconds = ((maybeMilliseconds).toString()).length === millisecondsDigitCount
  // If the maybeMilliseconds is hoursTreshold hours (e.g. 25) or less, adjust the time to miliseconds
  // Otherwise let's not touch it
  if (isExpressedInSeconds) {
    const durationInSeconds = Math.floor(maybeMilliseconds - seconds)
    const hours = Math.floor(durationInSeconds / 3600)
    if (hours < hoursTreshold) {
      maybeMilliseconds *= 1000
    }
  }

  return maybeMilliseconds
}

export const getDaysAgoToMilliseconds = (days: number = 1): number =>
  days * 1000 * 86400
export const getMillisecondsToDaysAgo = (ms: number = 1000): number =>
  ms / 86400 / 1000

export const getTimeNowUtcMillliseconds = () => new Date().getTime() // Always UTC!

export const getTimeDaysAgoMilliseconds = (
  endTimeMilliseconds: number,
  days: number = 1
): number => {
  const begin = getDaysAgoToMilliseconds(days)
  return endTimeMilliseconds - begin
}

export const getDaysAgoMillisecondsAsTuple = (
  days: number = 1
): [number, number] => {
  const endTime = getTimeNowUtcMillliseconds()
  const startTime = getTimeDaysAgoMilliseconds(endTime, days)

  return [startTime, endTime]
}

export const getDeltaDaysAgoFromNowUtcMilliseconds = (
  days: number = 1
): number => {
  const [startTime, endTime] = getDaysAgoMillisecondsAsTuple(days)
  return endTime - startTime
}
