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

# DEMO SIMPLE - Chat P2P
Ir la la url:

```
https://localhost:3000/chat.html
```
Y ver en la consola el id propio.

Luego con otro navegador o en otra ventana. Abir la misma URL y hacer lo mismo.

Colocar en el primer cuadro de texto el id de la otra ventana.

Luego se podran enviar mensajes mutuamente.


# DEMO COMPLEJA -  Lobby

Ir la la url:

```
https://localhost:3000
```

Borrar el localstorage escribiendo en consola lo siguiente:
```
localStorage.removeItem("name")
```
Refrescar la pagina.

Luego colocar un nombre de usuario, escribiendolo en el cuadro de texto y presionando enter.

Luego, crear una sala haciendo lo mismo.

Desde otro navegador. Crear usuario y seleccionar sala creada por el otro usuario.


