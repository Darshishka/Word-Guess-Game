create database db_pokemon

create table pokemonData (name varchar(30), type1 varchar(20), type2 varchar(20), imgSrc varchar(100), imgSrcSil varchar(100));

insert into pokemonData (name, type1, type2, imgSrc, imgSrcSil)
values ("Bulbasaur", "Grass", "Poison", "assets/images/Bulbasaur.png", "assets/images/BulbasaurSil.png");