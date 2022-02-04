export interface RequestResponse {
    token:  string;
    person: Person;
}

export interface Person {
    Id:          number;
    FirstName:   string;
    LastName:    string;
    PhoneNumber: string;
    Email:       string;
    Pass:        null;
    DateOfBirth: Date;
    Role:        number;
}
