export interface CreateUserResponse {
    status: string;
    data: {
        message: string;
        token: string;
        userId: number;
        user: {
            firstname: string;
            lastname: string;
            email: string;
            gender: string;
            job_role: string;
            department: string;
            address: string;
        }
    };
}
