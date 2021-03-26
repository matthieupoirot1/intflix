export class Episode {
  constructor(public id: number, public fkSeason: number, public num: number, public title: string, public seen: boolean) {}
}
