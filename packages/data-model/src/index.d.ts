declare class ServiceModel {
  domain: string
  icon: string
  constructor(domain: string, icon: string)
}
export declare class ServiceModelHelper {
  static create(model: any): ServiceModel
}
export default class ServiceModelCollection {
  items: ServiceModel[]
  constructor(seed?: never[])
  randomIndex(): number
  randomPick(): ServiceModel
}
export {}
