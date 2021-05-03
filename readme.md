# Real Time Comunication

**Como realizar aplicaciones de comunicacion en tiempo real P2P** 

En este proyecto se utilizan dos servidores.

- Node.js server con Socket.io
- Node.js Server Peer.js (Puede ser uno propio o público.


**Servidores seguros**

Es necesario utilizar localhost o https, por ejemplo:

```
https://localhost:3000/
```

# Instalacion

Lo primero que se debe hacer es installar las dependencias del proyecto con NPM.
Para ello en el archivo docker-compose.yml cambiamos la linea que dice:

```
command: bash -c "npm start"
```
Por la siguiente linea
```
command: bash -c "npm install"
```

Luego, para instalar esas dependencias ejecutamos:

```
sudo docker-compose up
```

Luego restauramos la linea a su original estado.

```
command: bash -c "npm start"
```

# Levantar el servidor

Para levantar el servidor solamente se necesita ejecutar:
```
sudo docker-compose up
```

Luego probar la aplicacion en:
```
https://localhost:3000/
```