create table user (
	user_id varchar(255) primary key not null,
  	age int(11) not null
);

create table asset (
	item varchar(255) not null,
  	user_id varchar(255) not null
);

insert into user (user_id, age) values ('wildan', 27), ('zaki', 25);
insert into asset (item, user_id) values 
('notebook', 'wildan'),
('bag', 'wildan'),
('notebook', 'zaki'),
('bag', 'zaki'),
('mobile phone', 'zaki');

select item from asset group by item;
select user_id, group_concat(item) as asset from asset group by user_id;