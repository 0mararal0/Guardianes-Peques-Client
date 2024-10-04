# Guardianes & Peques

## [Mira la APP!](https://guardianesypeques.netlify.app/)

![App Logo](./src/assets/images/Logo.png)

## Descripción

Guardianes & Peques es una app para poder conectar a familias que necesitan un cuidador, con Guardianes que buscan un trabajo.

#### [Client Repo here](https://github.com/0mararal0/Guardianes-Peques-Client)

#### [Server Repo here](https://github.com/0mararal0/Guardianes-Peques-Server)

## Tecnologías y Librerias usadas

##### HTML

##### CSS

##### JAVASCRIPT

##### REACT

##### BOOTSTRAP

##### AXIOS

## Funcionalidades pendientes

###### Registro de cliente.

###### Registro de guardian.

###### Confirmación de la reserva.

# Estructura del Client

## Navegación de Usuario

- **404** - El usuario puede ver una página 404 cuando navega a una página que no exite.
- **500** - El usuario puede ver una página 505 cuando ha habido un error en la App.
- **homepage** - El usuario puede acceder a la página HOME para ver de forma general la App e interactuar con ella.
- **Guandian Create** - El usuario se puede registrar como Guardian (trabajador) para ofrecer sus servicios.
- **Guandian View** - El usuario puede ver los Guardianes que hay disponibles.
- **Guandian Edit** - El usuario puede editar los Guardianes.
- **Guandian Deleted** - El usuario puede borrar los Guardianes.
- **Client Edit** - El usuario puede crear una reserva asociada a un Guardian.
- **Reservation** - El usuario puede ver las reservas realizadas.
- **Reservation Deleted** - El usuario puede borrar reservas realizadas.

## Client Routes

## React Router Routes (React App)

| Path                        | Page              | Components              | Behavior                              |
| --------------------------- | ----------------- | ----------------------- | ------------------------------------- |
| `/`                         | Home              | Navbar, Footer          | Home page                             |
| `/about`                    | About             |                         | Vista de informacion "Sobre Nosotros" |
| `/contact`                  | Contact           |                         | Formulario de contacto                |
| `/legalNotice`              | Legal Notice      |                         | Vista de información Legal            |
| `/filter`                   | Filtro            |                         | Vista de filtro general               |
| `/filterClient`             | Filtro Cliente    | FilterClient1,2,3,4,5,6 | Formulario y filtro del cliente       |
| `/filterGuardian`           | Filtro guardian   | FilterGiardian1,2,4,5   | Formulario y filtro del guardian      |
| `/guardians`                | Guardianes        |                         | Vista de guardianes disponibles       |
| `/editGuardian/:guardianId` | Editar Guardianes |                         | Formulario de edición de guardianes   |
| `/reservation`              | Reservas          |                         | Vista de reservas realizadas          |
| `/error`                    | Error             |                         | Vista de errores                      |
| `*`                         | Not Found         |                         | Vista de pagina no encontrada         |

## Other Components

- Navbar
- Footer
- FilterClient
- FilterGuardian

## Links

### Collaborators

[Developer 1 Miguel Ponte](https://github.com/Miguelitoo2421)

[Developer 2 Alberto Marcos](https://github.com/0mararal0)

### Project

[Repository Link Client](https://github.com/0mararal0/Guardianes-Peques-Client)

[Repository Link Server](https://github.com/0mararal0/Guardianes-Peques-Server)

[Deploy Link](https://guardianesypeques.netlify.app/)

### Slides

[Slides Link](https://guardianesypeques.netlify.app/)
