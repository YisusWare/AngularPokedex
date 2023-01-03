
export interface Type {
    count:    number;
    next:     null;
    previous: null;
    results:   Result[];
}

export interface Result {
    name: string;
    icon: string;
    url:  string;
}
