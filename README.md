# fizzbuzz
Weekly Mission 4

---

## Post realcionados

[Pasos para iniciaizar proyecto en NodeJS](https://aliciagaona.github.io/my_launchx_blog/posts/pasosparainicializarnodejs/)

[Dependencias](https://aliciagaona.github.io/my_launchx_blog/posts/dependencias/)

[Métodos útiles](https://aliciagaona.github.io/my_launchx_blog/posts/metodosnodejs/)


## Estructura general

```mermaid
flowchart LR
  Json -- leer modelo de infomacón --> Service -- leer métodos de Service --> Controller
```

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

---

## PARTE DOS


Inicialización de server.js, en este servidor montaremos nuestrso requerimientos

_1. Endpoint para recibir un parámetro por query params(GET)_


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



_2. Endpoint para regresar la cantidad de explorers según la misión que se envíe.(GET)_

La url de este endPoint => localhost:3000/v1/explorers/:mission


![image](https://user-images.githubusercontent.com/99162884/167233118-5b31d928-2d74-44b7-acd6-6b0d34b6585c.png)

![image](https://user-images.githubusercontent.com/99162884/167233126-0868d69a-2771-4f67-b5b1-c0a806c9ac93.png)

![image](https://user-images.githubusercontent.com/99162884/167233132-9c28639d-5b25-4033-8289-dde2bd6a0231.png)

![image](https://user-images.githubusercontent.com/99162884/167233136-8063f380-a7b6-4b7f-82cd-c9345a9d2652.png)



_3. Endpoint para regresar la lista de usernames de los explorers filtrados por la misión._

La url de este endPoint => localhost:3000/v1/explorers/usernames/:mission

![image](https://user-images.githubusercontent.com/99162884/167233533-a64e7c63-ef6d-4c6e-bb43-523a89e7b46a.png)

![image](https://user-images.githubusercontent.com/99162884/167233539-eeaf5417-c1a2-4cb8-bf62-de7743999321.png)

![image](https://user-images.githubusercontent.com/99162884/167233546-0c1c73d4-b5e4-40f8-a3a1-cca361cb94f2.png)

![image](https://user-images.githubusercontent.com/99162884/167233554-ac4679ca-c2d0-4450-b317-ab76a5acd408.png)


_TENEMOS LA API QUE NECESITAMOS, CON TRES SERVICISO GET PAR AMANEJAR LA INFORMACION DE EXPLORERS_

Quite los punto y coma para poder probar el funcionamiento de lint.

![image](https://user-images.githubusercontent.com/99162884/167233766-3dae6d74-4999-4e46-9669-4a39ac7a1d55.png)

Al correr lint: npm run linter

![image](https://user-images.githubusercontent.com/99162884/167233925-5c1a4252-521f-460f-8e46-685effeccf7a.png)

![image](https://user-images.githubusercontent.com/99162884/167233936-ceef5366-770a-400c-98c9-c811c81e1435.png)



Para corregir inconsitencias: npm run linter-fix


---

## Parte 3: Nuevo requerimiento

Tenemos un nuevo cliente que necesita parte de lo que ya tenemos pero de diferente forma. Es decir, el enviará un score, y nosotros le daremos lo correspondiente al trick. Esa validación es la que ya tenemos en FizzbuzzService. Pero ahora no necesitamos agregarle un campo a ningún explorer, solo regresar la palabra 'Fizz', 'Buzz', 'Fizzbuzz' o el score mismo, según es el caso. Cobraremos por cada request que recibamos.

Nuevo requerimiento: Crea un endpoint para recibir un número y aplicar la validación del fizzbuzz.

Score=3

![image](https://user-images.githubusercontent.com/99162884/167237096-a688c506-2302-4223-97c3-33664f5feb32.png)


![image](https://user-images.githubusercontent.com/99162884/167237107-c6652565-015b-48c2-a230-09c176555d35.png)


![image](https://user-images.githubusercontent.com/99162884/167237113-48255918-13ad-4114-b6b4-7d50a6aea5f6.png)

Score=1

![image](https://user-images.githubusercontent.com/99162884/167237138-78c9e42e-dfc1-4f27-a06f-a29ae575bea3.png)

![image](https://user-images.githubusercontent.com/99162884/167237152-515e9072-b6bc-4eaa-93be-0d2341d4e7cd.png)

Score=15

![image](https://user-images.githubusercontent.com/99162884/167237170-9e69bbea-f217-4742-a4c0-ffdc097447ae.png)

![image](https://user-images.githubusercontent.com/99162884/167237177-aad94ac5-d83a-4e6f-a0a1-71ff261a56de.png)



## Pruebas unitarias incluidas:

![image](https://user-images.githubusercontent.com/99162884/168535872-af58897f-1836-48f6-b759-b433b7485953.png)

__Reader__ - Clase que lee archivos json y pasan el modelo de datos

`
const Reader= require('./../../lib/utils/Reader')

    test("1. leer archivo Json que no existe", ()=>{
     const explorers = Reader.readJsonFile("explorers.json"); 
     expect(explorers).toBe(explorers)
     })

`

