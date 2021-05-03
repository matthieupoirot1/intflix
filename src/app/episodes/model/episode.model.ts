export class Episode {
  constructor(public id: number,
              public fkSeason: number,
              public num: number,
              public title: string,
              public seen: boolean) {}
  toJson(): string{
    return JSON.stringify({
      id: this.id,
      fkSeason: this.fkSeason,
      num: this.num,
      title: this.title,
      seen: this.seen,
    });
  }
}

// ng generate class shared/episodes/episode --type=model
