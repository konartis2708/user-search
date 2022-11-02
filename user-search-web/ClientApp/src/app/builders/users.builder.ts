import { IUser } from "../types/user";

export class UsersBuilder {

    private count = 1;
    public withUsers(count: number) {
        this.count = count;

        return this;
    }
    
    public build(): IUser[] {

        const response: IUser[] = []
        for (let i = 0; i <= this.count; i++) {
            response.push({
                firstName: 'Test',
                lastName: `Person ${i + 1}`,
                phone: '0800 000000',
                email: 'test@test.com',
                jobTitle: 'Software developer'
            })
        }

        return response;
    }
}