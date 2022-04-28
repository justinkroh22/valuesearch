import { combineLatest, map, Observable } from "rxjs";



export class ObservableMath {

    public static multiplyObservable$ (observable1$: Observable<number>, observable2$: Observable<number>): Observable<number> {
        let multiplied$ = combineLatest([observable1$, observable2$]).pipe(map(([observable1,observable2]) =>  observable1 * observable2));
    
        return multiplied$;
    }

    public static divideObvservable$(observable1$: Observable<number>, observable2$: Observable<number>): Observable<number> {

        let divided$ = combineLatest([observable1$, observable2$]).pipe(map(([observable1,observable2]) =>  observable1 / observable2));
    
        return divided$;
    }

    public static subtractObvservable$(observable1$: Observable<number>, observable2$: Observable<number>): Observable<number> {

        let divided$ = combineLatest([observable1$, observable2$]).pipe(map(([observable1,observable2]) =>  observable1 - observable2));
    
        return divided$;
    }

    public static addObvservable$(observable1$: Observable<number>, observable2$: Observable<number>): Observable<number> {

        let divided$ = combineLatest([observable1$, observable2$]).pipe(map(([observable1,observable2]) =>  observable1 + observable2));
    
        return divided$;
    }


    

}

// export function multiplyObservable$ (observable1$: Observable<number>, observable2$: Observable<number>): Observable<number> {
//     let multiplied$ = combineLatest([observable1$, observable2$]).pipe(map(([observable1,observable2]) =>  observable1 * observable2));

//     return multiplied$;
// }

// export function divideObvservable$(observable1$: Observable<number>, observable2$: Observable<number>): Observable<number> {

//     let divided$ = combineLatest([observable1$, observable2$]).pipe(map(([observable1,observable2]) =>  observable1 / observable2));

//     return divided$;
// }

// export function subtractObvservable$(observable1$: Observable<number>, observable2$: Observable<number>): Observable<number> {

//     let divided$ = combineLatest([observable1$, observable2$]).pipe(map(([observable1,observable2]) =>  observable1 - observable2));

//     return divided$;
// }

// export function addObvservable$(observable1$: Observable<number>, observable2$: Observable<number>): Observable<number> {

//     let divided$ = combineLatest([observable1$, observable2$]).pipe(map(([observable1,observable2]) =>  observable1 + observable2));

//     return divided$;
// }