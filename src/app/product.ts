export class Product {
    public _id: string;
    public _name: string;
    public _description: string;
    public _imageUrl: string;
    public _categories: string[];
    public _price: string;

    constructor ( ) {

    }

    get id(): string {
        return this.id;
    }

    set id(id: string) {
        this._id = id;
    }

    get name(): string {
        return this.name;
    }

    set name(name: string) {
        this._name = name;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }

    set imageUrl(imageUrl: string) {
        this._imageUrl = imageUrl;
    }

    get categories(): Array<string> {
        return this._categories;
    }

    set categories(categories: Array<string>) {
        this._categories = categories;
    }

    get price(): string {
        return this._price;
    }

    set price(price: string) {
        this._price = price;
    }

}
