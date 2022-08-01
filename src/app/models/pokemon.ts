export class Pokemon {
  attack!: number;
  defense!: number;
  id_author!: number
  hp!: number;
  id!: number;
  idAuthor?:number;
  image!: string;
  name!: string;
  type!: string;

  constructor() {
    this.attack = 0;
    this.defense = 0;
  }

}
