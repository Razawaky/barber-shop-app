create database Barbearia;

create table  barbearia.plano(
id_plano int not null auto_increment,
descrição varchar(45) not null,
valor int not null,
primary key (id_plano)
);

create table  barbearia.agenda(
id_agenda int not null auto_increment,
datadia date not null,
horario varchar(45) not null,
tipo_plano varchar(45) not null,
status_barb varchar(45) not null,
primary key (id_agenda)
);

create table  barbearia.barbearia(
id_barbearia int not null auto_increment,
id_agenda int not null,
numero int not null,
senha int not null,
constraint idagenda foreign key (id_agenda) references agenda(id_agenda),
primary key (id_barbearia)
);

create table  barbearia.barbeiros(
id_barbeiros int not null auto_increment,
id_barbearia int not null,
id_agenda int not null,
nome varchar(45) not null,
numero int not null,
constraint idbarbearia foreign key (id_barbearia) references barbearia(id_barbearia),
constraint idagenda2 foreign key(id_agenda) references agenda(id_agenda),
primary key (id_barbeiros)
);

create table  barbearia.cliente(
id_cliente int not null auto_increment,
id_barbearia int not null,
id_plano int not null,
id_agenda int not null,
constraint idbarbearia1 foreign key (id_barbearia) references barbearia(id_barbearia),
constraint idplano foreign key (id_plano) references plano(id_plano),
constraint idagenda1 foreign key (id_agenda) references agenda(id_agenda),
primary key (id_cliente)
);

