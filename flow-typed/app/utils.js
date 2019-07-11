/* eslint-disable no-undef */
declare type $ExtractReturn<Fn> = $Call<<T>((...Iterable<any>) => T) => T, Fn>;
declare type $ExtractObject<T> = $ObjMap<T, <V>(V) => V>

declare type $ExtractComponentProps<T, U, V> = $Diff<$Diff<T, U>, V>

declare type $ExtractActionParams<T> = $Diff<$ExtractReturn<T>, { type: any }>

declare type MapOf<T:string, U> = { [T]: U }

declare type ChoiceOf<T: string, U> = {| group?: string, id: T, value: U |}
