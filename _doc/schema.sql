create database albumFigurinha;

use albumFigurinha;

create table figurinha (
    id int not null auto_increment,
    nome varchar(255) not null,
    dtns date not null,
    foto varchar(255) not null,
    naturalidade varchar(255),
    primary key (id)

);