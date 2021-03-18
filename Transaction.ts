export class Transaction {
    public sender: string;
    public recipient: string;
    public ammout: number;
    constructor(_sender: string, _recipient: string, _ammout: number) {
        this.sender = _sender;
        this.recipient = _recipient;
        this.ammout = _ammout;
    }
}