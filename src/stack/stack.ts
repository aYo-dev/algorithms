export class Stack {
    private storage: string;
    private storageLength = 0;
    
    constructor() {
        this.storage = '';
    }

    public push(value: any): void {
        this.storage = this.storage.concat(',', value);
        this.storageLength++;
    }

    public pop(): any {
        let storageItem = this.storage.slice(this.storage.lastIndexOf(',') + 1);
        this.storage = this.storage.substring(0, this.storage.lastIndexOf(','));

        return storageItem;
    }

    public size(): number {
        return this.storageLength;
    }
}
