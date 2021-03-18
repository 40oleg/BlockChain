export class Wallet {
    public id: string;
    private id_length: number = 512;
    constructor() {
        this.id = this.CreateID();
    }
    private CreateID(): string {
        let tmp_id: string = "";
        for(let i = 0; i < this.id_length; i++) {
            tmp_id += String.fromCharCode(Math.trunc(Math.random()*(127-33))+33);
        }
        return tmp_id;
    }
}