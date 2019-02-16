/* tslint:disable */
export class Photo {
    id?: number;
    name?: string;
}

export abstract class IQuery {
    abstract getPhotos(): Photo[] | Promise<Photo[]>;

    abstract photo(id: string): Photo | Promise<Photo>;

    abstract temp__(): boolean | Promise<boolean>;
}
