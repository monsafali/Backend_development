

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
UNIQUE:   All values in column are different
Default    Set the defaul value of a column
Check IT can limit the values allowed in a column 



Primary Key: Makes a column unique & not nul but used only for one 



Foreign Key:  Prevent actions that whould destroy links between tables; 
