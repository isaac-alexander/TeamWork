export interface SignInResponse {
    status: string;
    data: {
        token: string;
        userId: number;
        email: string;
        jobRole: string;
        fullName: string;
    };
}
