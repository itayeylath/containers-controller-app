// import { RequestHandler } from "express";

export class ErrorHandler extends Error{
    constructor(public statusCode: number, public messege: string) {
        super();
        this.statusCode = statusCode;
        this.message = this.message
    }
} 