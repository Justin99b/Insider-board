import React from "react";
import {QuoteStore} from "../Store/QuoteStore";
import {QuoteComponent} from "../Components/Quote";
import {Observer} from "mobx-react-lite";

export interface QuotesProps {
    store: QuoteStore
}

export function QuotesPage({store}: QuotesProps) {
    return <Observer>{() => (<>{store.quotes.map(quote => <QuoteComponent quote={quote}/>)}</>)}</Observer>
}
