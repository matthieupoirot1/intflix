export class Season {
  constructor(public id: number, public fkSerie: number, public name: string) {}
}

// ng generate class shared/seasons/season --type=model
