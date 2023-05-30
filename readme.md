**PASOS PARA INICIAR EL PROYECTO:** 

# Variables de entorno en el archivo .env:
+ PORT - Puerto donde correrá el proyecto
+ KEY  - Esta es la llave maestra de nuestra app

# Instalar dependencias y ejecutar proyecto:
+ npm i
+ npm start

# ENDPOINTS ------------------------------------------

# ------------------------------------------ #
+ **REGISTRO** { http://localhost:3000/register } POST
+ BODY { name: "", email: "", password: "" }
# ------------------------------------------ #

# ------------------------------------------ #
+ **LOGIN** { http://localhost:3000/login } POST
+ BODY { email: "", password: "" }
# ------------------------------------------ #

# ------------------------------------------ #
+ **VALIDAR** { http://localhost:3000/validar } GET
+ HEADERS x-access-token : TOKEN_USER
# ------------------------------------------ #


# ENDPOINTS ------------------------------------------




