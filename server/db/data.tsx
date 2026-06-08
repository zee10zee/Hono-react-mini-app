

// give me ten users type 
export default interface User {
    id?: number,
    name: string,
    email: string, 
    city : string,
    dob : string | Date,
}


// create an array of 10 users with the above type
export const users: User[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        city: "New York",
        dob: "1990-01-01"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        city: "Los Angeles",
        dob: "1992-05-15"
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        city: "Chicago",
        dob: "1985-10-20"
    },
    {
        id: 4,
        name: "Alice Brown",
        email: "alice.brown@example.com",
        city: "Houston",
        dob: "1991-03-12"
    },
    {
        id: 5,
        name: "Charlie Wilson",
        email: "charlie.wilson@example.com",
        city: "Phoenix",
        dob: "1988-07-25"
    },
    {
        id: 6,
        name: "Diana Davis",
        email: "diana.davis@example.com",
        city: "Philadelphia",
        dob: "1993-11-30"
    },
    {
        id: 7,
        name: "Eve Miller",
        email: "eve.miller@example.com",
        city: "San Antonio",
        dob: "1987-02-18"
    },
    {
        id: 8,
        name: "Frank Garcia",
        email: "frank.garcia@example.com",
        city: "San Diego",
        dob: "1994-09-05"
    },
    {
        id: 9,
        name: "Grace Rodriguez",
        email: "grace.rodriguez@example.com",
        city: "Dallas",
        dob: "1986-12-10"
    },
    {
        id: 10,
        name: "Henry Martinez",
        email: "henry.martinez@example.com",
        city: "San Jose",
        dob: "1995-06-20"
    }
]
