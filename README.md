# PRUEBA TECNICA YAHIR

#Deploy en Heroku
https://my-twitter-client-dev.herokuapp.com/

#Video tutorial
https://drive.google.com/file/d/1xwHfxPKxsliLXM2n9PukyKD_w2cy4F1S/view?usp=sharing

#### DESCRIPCION


```bash
Prueba tecnica desarrollada en:
-Angular(frontend)
-ASP.Net core(backend)
-PostgreSQL(DB)
```

#### Prerequisitos

 
```bash
# node.js v14.15.1, npm 6.14.8 , Angular CLI: 11.0.5
# Correr el script DataBaseScript.sql para generar la base de datos
# Correr el script Usuarios.sql para los usuarios de prueba
# usar los dos usuarios creados por defecto:
# usuario1:  yahir   clave: 123456
# usuario2:  lperez  clave: 123456

```



### Clonar repositorio

```bash
$ git clone git@github.com:yahir98/Prueba_Varsity_Dev.git
```


### Construir

```bash
# Ir a carpeta
$ cd Twitter-Frontend
# Instalar librerias
$ npm install

```

### Ejecutar

```bash
# El aplicativo levanta en localhost:4200
$ ng serve --o

```

## Backend

### Variables de configuracion

```
 .env
 # Se configura la variable de entorno llamada DB_CONNECTION para realizar la conexion a la base de datos
 # Si desea cambiar el esquema de la base de datos puede configurarlo con la variable DB_SCHEMA,por defecto el esquema es "public"
```



### Construir

```bash
# Ir a carpeta
$ cd API_Twitter
# Leventar API


```








