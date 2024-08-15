sudo snap install mysql-workbench-community

What is Database?
It is a collection of data in a format that can be easily accessed.
Why databases?
can store large data.
Features like seruity , scalability etc.
Easier to insert, update or delete data.

SQL vs NOSql

SQl
Relational Data base(data store in table form) eg: mysql oracle, postgreSql etc.

NoSQL:
Non Relational Database (data store in doucment/key-vl graph etc) eg: MongoDB. Cassandra, Neo4j etc.

What is SQL (Structued Query Language)
SQL is a programing language used to interact with relational databases.

show databases;
create database database_name;
drop database; database_name;
use databases; database_name:

create table table_name( id int, name varchar(15), age int);
insert into table_name values (1, 'monsaf', 25), (2,'kaleem', 35), (3, 'mustafa', 26);
show tables;

Select * from table_name;

<!-- data type -->

main Datatypes in Mysql
String Integer, Date

String Datatypes we will use:
CHAR, VARCHAR, Text

SOME IMPORT INT DATATYPE
INT, TINYINT, BOOLEAN, FLOAT

Some imprt Date Datatypes
Date, Timestamp, Time Year,

Constarains:
Rules for data in the table

NOT NULL: Columns cannot have a null value
UNIQUE: All values in column are different
Default Set the defaul value of a column
Check IT can limit the values allowed in a column

CREATE TABLE players (
id INT,
name VARCHAR(30) NOT NULL,
email VARCHAR(50) UNIQUE,
salary INT DEFAULT 0,
age INT,
CONSTRAINT age_check CHECK (age >= 18)
);

Primary Key: Makes a column unique & not nul but used only for one
It is a column (or set of columns) in a table that uniquely identifies each row ( a unique id) There is only 1 PK & it should be NOT nul..

Create Table temp (
id int not null,
Primary key (id)
);

Foreign Key: Prevent actions that whould destroy links between tables;
A foreign key is a column (or set of columns) in a table that refers to the primary key in
Foreing key can have dupliat & null values there can be multipe Fks.
create table temp (
id int,
Foreign Key (id) references customer (id))

DISTINCT
select distinct age from user:

only give us unique value not show same again & again.

Select first_name as fname from table_name;

Where:
select \* from....... where fname='monsaf' And passsword='Jutt@1122';

select \* from ..... where age >= 18 andl age <= 40;

Limit
we can add the limit how much row data we need to simply add limit 5;

Order by Clause
To sort in ascending (ASC) or desending order (DESC)
Selectt col1, col2 from table_name Order by col_name asc or desc

Aggregate Funciton
Aggregate funtions perfomr a calculation on a set of values, and rturn a single value.
Count()
Max()
Min()
Sum()
AVG()

    EXample

select max(age) from users;
select count(age) from users where age = 32;
select min(age) from users;
select avg(age) from users;
select sum(followers) from users;

Groups By Clause
Grops rows that have the same values into summary rows.
It collects data from multiple records and groups the result by one or more column.

select count(age) from users group by age ;
select age ,count(age) from users group by age ;
select age ,max(followers) from users group by age ;

having Clause:
Similar To where i.e applies some condition on rows.
But it is used when we want to aply any condition after grouping.

Select col1, col2,
from table_name
group by col_name
having condition;

Where is for the table, having is for a group
Grouping is necesssary for Having.
Examples:
select age ,max(followers) from users group by age having max(followers) > 400;

Table Queries:

Update ( to update existing rows)
set SQL_SAFE_UPDATES = 0;
Update table_name set col1 = val1, col2, val2 where condition;
update user set followers = 600 where age = 16;

Delete (to delte existing rows)
Delete from table_name where conditon;
delete from users where age >= 23 and age < 25;

Alter ( to change the schema)

ADD Column
Alter Table Table_name
Add column column_name datatype consraint;

Drop column
Alter Table table_name
Drop column column_name;

Rename Table
Alter table table_name;
Rename to new_table_name

Change Columns (rename)
Alter Table table_name
Change column old_name new_name new_datatype new_constraint;

Modify Columnn (modifty datatype/constraint)

Alter table table_name
Modify col_name new_datatype new_constraints;

alter table users add column city varchar(25) default "lahore";
alter table users drop column age;
alter table users rename to InstaUser;
alter table users change column followers subs int default 0;

Truncate (to delete table's data)

TRUNCATE TABL E table_name;

Joins:







source scheme.sql; 


how to insert data in Bulk:
using faker



Routing  in mysql:
