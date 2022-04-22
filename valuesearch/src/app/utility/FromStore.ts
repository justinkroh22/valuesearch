import { Observable } from "rxjs";
import { FromStoreOptions } from "./FromStoreOptions";

export interface FromStore<T> {

    getFromStoreByKey(key: string, options?: FromStoreOptions): Observable<T | undefined> 
}