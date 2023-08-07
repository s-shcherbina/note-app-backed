export class Note {
  constructor(
    public id: string,
    public name: string,
    public date: string,
    public category: string,
    public content: string,
    public dates: string,
    public archived: boolean,
  ) {}
}
