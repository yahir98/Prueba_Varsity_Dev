-- public.retweets definition

-- Drop table

-- DROP TABLE retweets;

CREATE TABLE retweets (
	retweetsid uuid NOT NULL,
	texto varchar NULL,
	usuarioid uuid NULL,
	fechacreacion date NULL,
	estado varchar NULL,
	tweetid uuid NOT NULL,
	CONSTRAINT retweets_pk PRIMARY KEY (retweetsid)
);


-- public.usuarios definition

-- Drop table

-- DROP TABLE usuarios;

CREATE TABLE usuarios (
	usuarioid uuid NOT NULL,
	nombreusuario varchar NULL,
	clave varchar NULL,
	fechacreacion date NULL,
	correo varchar NULL,
	usuario varchar NULL,
	CONSTRAINT usuarios_pk PRIMARY KEY (usuarioid)
);


-- public.tweets definition

-- Drop table

-- DROP TABLE tweets;

CREATE TABLE tweets (
	tweetid uuid NOT NULL,
	texto varchar NULL,
	fechacreacion timestamp NULL,
	usuarioid uuid NOT NULL,
	estado varchar NULL,
	CONSTRAINT tweets_pk PRIMARY KEY (tweetid),
	CONSTRAINT tweets_fk FOREIGN KEY (usuarioid) REFERENCES usuarios(usuarioid)
);


-- public.comentarios definition

-- Drop table

-- DROP TABLE comentarios;

CREATE TABLE comentarios (
	idcomentario uuid NOT NULL,
	texto varchar NULL,
	usuarioid uuid NOT NULL,
	fechacreacion date NULL,
	tweetid uuid NOT NULL,
	CONSTRAINT comentarios_pk PRIMARY KEY (idcomentario),
	CONSTRAINT comentarios_fk FOREIGN KEY (tweetid) REFERENCES tweets(tweetid)
);