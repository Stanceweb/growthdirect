CREATE DATABASE Consultez;
use Consultez;

-- 1. USER TABLE --  
CREATE TABLE users(
id int PRIMARY KEY  auto_increment,
name varchar(100),
email varchar (150) unique ,
password varchar (255),
role ENUM ('admin','user') default 'user',
created_at timestamp default current_timestamp
);

ALTER TABLE users 
ADD COLUMN status VARCHAR(20) DEFAULT 'active';


--  INSERT INTO users (name, email, password, role)
--  VALUES ('VoraKaushal', 'vorakaushal2004@gmail.com', '$2b$10$4TD2yVqMWLhtA7UgVrTCPu8joRoFoWdyzBAa1xhD53SxihygxVZgi', 'admin'); 

-- 2. CATEGORIES TABLE --
CREATE TABLE categories(
id int PRIMARY KEY auto_increment,
name VARCHAR (100),
type ENUM ('blog' , 'services'),
created_at timestamp default current_timestamp
);

-- INSERT INTO categories (name, type)
-- VALUES ('Business Services', 'services');

-- 3. SERVICES TABLE --
CREATE TABLE services(
id int PRIMARY KEY auto_increment,
title varchar(100),
slug varchar(150) unique,
description TEXT,
image varchar (255),
category_id int,
created_at timestamp default current_timestamp,
foreign key (category_id) references categories(id) on delete set NULL
);

-- 4. BLOGS TABLE --
CREATE TABLE blogs(
id int PRIMARY KEY AUTO_INCREMENT,
title varchar(100),
slug varchar(150) unique,
content text,
image varchar (255),
author_id int,
category_id int,
created_at timestamp default current_timestamp,
foreign key (author_id) references users(id) on delete set null,
foreign key (category_id) references categories(id) on delete set null
); 


-- 5. INQUIRIES TABLE --
create table inquiries(
id int primary key auto_increment,
name varchar(100),
email varchar(100) unique ,
phone varchar (20),
message TEXT,
created_at timestamp default current_timestamp 
);



-- 6. TEAM-MEMBERS TABLE --
create table team_members(
id int primary key auto_increment,
name varchar(100),
designation text,
image varchar(255),
facebook varchar(255),
instagram varchar(255),
twitter varchar (255),
linkdin varchar (255),
created_at timestamp default current_timestamp
);

-- 7. TESTIMONIALS TABLE -- 
create table testimonials(
id int primary key auto_increment,
name varchar(100),
feedback TEXT ,
rating INT check (rating between 1 AND 5),
image varchar(255),
created_at timestamp default current_timestamp 
);   


select*from users;
select*from services;
select*from categories;
select*from inquiries;
select*from blogs;

 