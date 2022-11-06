import {observable} from "mobx";

export class QuoteDto {
    @observable
    public id: string

    @observable
    public name: string

    @observable
    public text: string

    @observable
    public date: Date

    @observable
    public tags: string[]

    constructor(name: string, text: string, date: Date, tags: string[]) {
        this.id = "1"
        this.name = name;
        this.text = text;
        this.date = date;
        this.tags = tags;
    }
}
