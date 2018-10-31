class ServiceModel {
  constructor(public domain: string, public icon: string) {}
}

export class ServiceModelHelper {
  static create(model: any) {
    const { domain = 'Foo', icon = 'download' } = model
    return new ServiceModel(domain, icon)
  }
}

export class ServiceModelCollection {
  items: ServiceModel[] = []
  constructor(seed = []) {
    for (const i of seed) {
      this.items.push(ServiceModelHelper.create(i))
    }
  }
  randomIndex() {
    return Math.floor(Math.random() * Math.floor(this.items.length))
  }
  randomPick() {
    const pick = this.randomIndex()

    return this.items[pick]
  }
}
