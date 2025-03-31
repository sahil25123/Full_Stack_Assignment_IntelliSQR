import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
    constructor(
        public message: string,
        public statusCode: number = 400,
        public details?: unknown
    ) {
        super(message);
    }
}

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            details: err.details
        });
    }

    console.error('[ERROR]', err);

    return res.status(500).json({
        success: false,
        message: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
};