import React from "react";
import {useParams} from "react-router-dom";
import {QuoteStore} from "../Store/QuoteStore";
import {QuoteComponent} from "../Components/Quote";
import {Observer} from "mobx-react-lite";

export interface QuoteProps {
    store: QuoteStore
}

export function QuotePage({store}: QuoteProps) {
    let {id} = useParams();
    return <Observer>{() => (<QuoteComponent quote={store.getQuoteById(id!)}/>)}</Observer>
}
