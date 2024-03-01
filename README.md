### Para levantar el servidor:
- `cd api`

- `npm intall` (primer arranque)

- `npm run dev` ó `npm start`

### Para levantar el cliente:
- `cd client`

- `npm intall` (primer arranque)

- `npm run dev`

### Notas:

la api se levanta en puerto `3002`

el cliente se levanta en `http://localhost:5173`

### antes de levantar por primera vez:

- crear archivo ".env" en carpeta "api" y "client"
- crear manualmente la BD que se va a utilizar si se usa de forma local
- carpeta "client"; archivo "env.js", comentar las líneas de "Variables para Deploy" y descomentar las líneas de "Variables para Desarrollo"
- rellenar la BD por primera vez usando en el navegador la dirección: http://localhost:3002/rellenar

### para resetear la BD:

en el archivo `api\src\server.js `

comentar la línea 41 `.sync({ force: true })`,

descomentar la línea 40 `.sync({ alter: true })`
