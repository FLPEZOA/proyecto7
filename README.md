# Proyecto7
<<<<<<< HEAD
# Proyecto7
=======
# Tienda de Donuts

¡Bienvenido a la Tienda de Donuts! Este es un proyecto de e-commerce donde los usuarios pueden explorar diferentes tipos de donuts, agregar productos a su carrito y proceder al pago utilizando Stripe.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Características

- Registro e inicio de sesión de usuarios.
- Navegación mediante productos disponibles.
- Funcionalidad del carrito de compras.
- Integración con Stripe para pagos.
- Vista de perfil de usuario.

## Tecnologías Utilizadas

- **Frontend**:
  - React
  - React Router
  - Axios
  - Bootstrap o Tailwind CSS

- **Backend**:
  - Node.js
  - Express
  - MongoDB / Mongoose
  - Stripe 

## Instalación

1. **Clone el repositorio**:
    ```bash
    git clone https://github.com/tu_usuario/tienda-de-donuts.git
    ```

2. **Navega a la carpeta del cliente**:
    ```bash
    cd tienda-de-donuts/client
    ```

3. **Instala las dependencias del cliente**:
    ```bash
    npm install
    ```

4. **Navega a la carpeta del servidor**:
    ```bash
    cd ../server
    ```

5. **Instala las dependencias del servidor**:
    ```bash
    npm install
    ```

6. **Configura el archivo `.env`**:
    - Crea un archivo `.env` en la carpeta del servidor y añade las siguientes variables:
      ```plaintext
      MONGODB_URI=tu_uri_de_mongodb
      STRIPE_SECRET_KEY=tu_clave_secreta_de_stripe
      JWT_SECRET=tu_secreto_para_jwt
      PORT=5000
      ```

## Uso

1. **Ejecuta el servidor**:
    ```bash
    cd server
    node index.js
    ```

2. **Ejecuta la aplicación del cliente**:
    ```bash
    cd ../client
    npm start
    ```

3. **Abre tu navegador** y ve a `proyecto7-qufc.vercel.app` para ver la aplicación.




