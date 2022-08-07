export abstract class CommandHandler {
  protected readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract handle(postContent: string): string;
}
