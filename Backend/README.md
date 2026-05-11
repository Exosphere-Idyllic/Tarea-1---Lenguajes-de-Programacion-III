# 🔐 Auth API - Documentación de Endpoints

API de autenticación con endpoints para registro e inicio de sesión de usuarios.

---

## 🚀 Requisitos previos

Antes de consumir los endpoints, asegúrate de tener el servidor corriendo:

```bash
cd Backend
npm run start:dev
```

> El servidor estará disponible en `http://localhost:3000`

---

## 📌 Endpoints

### 1. Registrar Usuario — `Sign Up`

Crea un nuevo usuario y lo guarda en la memoria del servidor.

| Campo       | Valor                              |
|-------------|------------------------------------|
| **URL**     | `http://localhost:3000/auth/signup`|
| **Método**  | `POST`                             |
| **Headers** | `Content-Type: application/json`   |

#### 📥 Cuerpo de la Petición

```json
{
  "username": "tu_usuario",
  "password": "tu_password"
}
```

#### 💻 Ejemplo con `fetch` (JavaScript)

```javascript
fetch('http://localhost:3000/auth/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'mi_usuario',
    password: 'mi_password_secreto'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

---

### 2. Iniciar Sesión — `Login`

Valida que el usuario exista y que la contraseña coincida. Devuelve un token de acceso si las credenciales son correctas.

| Campo       | Valor                             |
|-------------|-----------------------------------|
| **URL**     | `http://localhost:3000/auth/login`|
| **Método**  | `POST`                            |
| **Headers** | `Content-Type: application/json`  |

#### 📥 Cuerpo de la Petición

```json
{
  "username": "tu_usuario",
  "password": "tu_password"
}
```

#### 💻 Ejemplo con `fetch` (JavaScript)

```javascript
fetch('http://localhost:3000/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'mi_usuario',
    password: 'mi_password_secreto'
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('Login exitoso:', data);
    // data.access_token contendrá el token mockeado
  })
  .catch(error => console.error('Error:', error));
```

---

## 📤 Respuestas del Servidor

### ✅ Éxito

| Endpoint  | Código HTTP         |
|-----------|---------------------|
| Sign Up   | `201 Created`       |
| Login     | `200 OK`            |

```json
{
  "message": "Login successful",
  "user": {
    "id": "abcd123",
    "username": "mi_usuario"
  },
  "access_token": "mock-jwt-token-12345"
}
```

### ❌ Error

| Situación                                        | Código HTTP       |
|--------------------------------------------------|-------------------|
| Contraseña incorrecta o usuario inexistente      | `401 Unauthorized`|
