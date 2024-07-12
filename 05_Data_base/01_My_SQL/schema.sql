create table user(
    Id varchar(50) PRIMARY KEY,
    UserName varchar(50) UNIQUE,
    Email varchar(50) UNIQUE NOT NULL,
    Password varchar(50) NOT NULL
);




