CREATE DATABASE city_trippin_db;

use city_trippin_db;

create table landmarks_chicago(
id integer(12) auto_increment not null,
landmark varchar(100),
phone varchar(14),
address varchar(100),
rating varchar(5),
hours varchar(100),
info varchar(500),
primary key (id)
);

select * from landmarks_chicago;
