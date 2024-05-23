// response.dto.ts
export class ResponseDto {
    public type: string;
    public status: number;
    public message: string | any;
    public data: any;

    constructor(
        { type, status, message = null, data = null }: { type: string, status: number, message: string | any, data?: any }
    ) {
        this.type = type;
        this.status = status;
        this.message = message;
        this.data = data;
    }

    sendResponse(res: any) {
        if (this.type === "Success") {
            res.status(this.status).json({
                status: this.status,
                msg: this.message,
                data: this.data,
            });
        } else {
            res.status(this.status).json({
                status: this.status,
                msg: this.message,
                error: this.message
            });
        }
    }
}
