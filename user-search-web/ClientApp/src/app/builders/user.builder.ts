import { IUser } from "../types/user";

export class UserBuilder {
    private firstName: string = 'test';
    private lastName: string = 'person';
    public withFirstName(value: string) {
        this.firstName = value;
        return this;
    }

    public withLastName(value: string) {
        this.lastName = value;
        return this;
    }
    public build(): IUser {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            phone: '0800 000000',
            email: 'test@test.com',
            jobTitle: 'Software developer'
        }
    }
}