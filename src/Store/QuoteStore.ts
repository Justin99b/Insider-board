import {makeAutoObservable, observable} from "mobx";
import {QuoteDto} from "../Dtos/QuoteDto";

export class QuoteStore {
    @observable
    public quotes: QuoteDto[];

    constructor() {
        makeAutoObservable(this);

        this.quotes = [new QuoteDto(
            'Justin B.',
            'Wie ist das so als Feuerwehrmann,wenn du so eine Hanfplantage brennen musst?',
            new Date(),
            ['Dummheit', '3 Uhr Nachts']
        )];
        setInterval(() => {
            this.quotes = [
                ...this.quotes,
                new QuoteDto(
                    'Justin B.',
                    'Wie ist das so als Feuerwehrmann,wenn du so eine Hanfplantage brennen musst?',
                    new Date(),
                    ['Dummheit', '3 Uhr Nachts']
                )
            ];
        }, 1000)
    }

    public getQuoteById(id: string): QuoteDto {
        return this.quotes.find(quote => quote.id === id)!;
    }


}
