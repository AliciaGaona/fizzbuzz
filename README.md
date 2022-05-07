# fizzbuzz
Weekly Mission 4

Este readme esta en proceso de construcción...

Glosario de temas del este proyecto:

- Clases

- Objetos instanciados por una clase

- Métodos

- Server express

- Actions de Github

- Jest

- Pruebas unitarias

- Eslint


![image](https://user-images.githubusercontent.com/99162884/166895204-7ee4cbfd-9b0b-4bdb-a04c-83b4d30b6fb1.png)


## Linter te dice tusu errores de escritura según lo configurado

comando: npm run linter

![image](https://user-images.githubusercontent.com/99162884/166895847-15e7daeb-0b9a-47f4-bb8b-0ae864f02103.png)


![image](https://user-images.githubusercontent.com/99162884/166896153-f3bd63f8-7e8f-4450-b999-f8e65c2c1fb6.png)


## Linter soluciona esas mismas inconsistencias

comando : npm run linter-fix

![image](https://user-images.githubusercontent.com/99162884/166896283-434651fd-1679-46b0-ab7a-28a51ebb7775.png)


![image](https://user-images.githubusercontent.com/99162884/166896316-46b37617-5ea0-471c-b5ee-1289d09d7d58.png)


Referencia :

https://eslint.org/docs/rules/

## PARTE DOS


Inicialización de server.js, en este servidor montaremos nuestrso requerimientos

1. Endpoint para recibir un parámetro por query params(GET)


![image](https://user-images.githubusercontent.com/99162884/167069994-2ebfff19-354d-4f81-a162-41f6dc4b9767.png)


![image](https://user-images.githubusercontent.com/99162884/167070099-d0102a89-61ea-44e5-854c-82f60a2f5e19.png)


Corremos nuestro server de nodeJS :

![image](https://user-images.githubusercontent.com/99162884/167070181-6ac4a947-47d2-43e0-8bd2-bbdf6de507aa.png)


la url de este endPoint =>  localhost:3000/v1/explorers/:mission (:mission es un query param)

Ejemplos:

GET a los explores con mission: node

![image](https://user-images.githubusercontent.com/99162884/167070204-7f053965-991a-4538-afa7-e3f3f4c2ddbd.png)


![image](https://user-images.githubusercontent.com/99162884/167070294-0ed1d732-8f48-4e03-994a-5aff21144d0d.png)


GET a los explores con mission: java

![image](https://user-images.githubusercontent.com/99162884/167070359-b32e1148-f785-4fc4-9280-7286e5dc15a4.png)


![image](https://user-images.githubusercontent.com/99162884/167070370-7c82c7ed-b058-449a-8646-47c82f58ee76.png)



2. Endpoint para regresar la cantidad de explorers según la misión que se envíe.(GET)

La url de este endPoint => localhost:3000/v1/explorers/:mission


![image](https://user-images.githubusercontent.com/99162884/167233118-5b31d928-2d74-44b7-acd6-6b0d34b6585c.png)

![image](https://user-images.githubusercontent.com/99162884/167233126-0868d69a-2771-4f67-b5b1-c0a806c9ac93.png)

![image](https://user-images.githubusercontent.com/99162884/167233132-9c28639d-5b25-4033-8289-dde2bd6a0231.png)

![image](https://user-images.githubusercontent.com/99162884/167233136-8063f380-a7b6-4b7f-82cd-c9345a9d2652.png)



3. Endpoint para regresar la lista de usernames de los explorers filtrados por la misión.

La url de este endPoint => localhost:3000/v1/explorers/usernames/:mission


