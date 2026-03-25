# Frontend - Sistema para módulo de psicología de la Universidad de Guanajuato

## Admin
![ssp-admin](https://github.com/user-attachments/assets/1fd6407d-e2b5-4399-9340-0536b6806fc2)

## Psicólogo
![ssp-psicologo](https://github.com/user-attachments/assets/585bdcb2-96db-491e-9c0c-e98d7b56e17e)

## Paciente
![tugif-final](https://github.com/user-attachments/assets/6d01998f-d3ce-4744-958a-807103a8337b)

## Evidencias
[SSP-Evidencias.pdf](https://github.com/user-attachments/files/26239019/SSP-Evidencias.pdf)

## Descripción

Este proyecto corresponde al frontend desarrollado durante mi etapa de **Servicio Social Profesional**. Fue construido como la interfaz de usuario para un sistema orientado a la gestión de información clínica/psicológica, permitiendo interactuar con módulos como pacientes, citas, calendarios, cuestionarios, gráficas y distintos flujos según el tipo de usuario.

Aunque fue desarrollado en una etapa en la que apenas comenzaba a profesionalizar mi forma de estructurar aplicaciones frontend, el proyecto ya incorpora varios elementos importantes, como:

- Organización modular del proyecto
- Navegación por rutas
- Consumo de servicios desde API
- Manejo de interfaces para distintos módulos
- Integración con componentes visuales de terceros
- Formularios y vistas dinámicas
- Calendarios, gráficas y tablas
- Separación entre lógica, vistas y componentes reutilizables

Es importante mencionar que, aunque el proyecto tiene una base funcional y una estructura bien planteada para su momento, **quedó en estado demo**, por lo que puede contener bugs, mejoras pendientes o partes que hoy podrían refactorizarse con mejores prácticas.

## Objetivo del proyecto

El objetivo principal fue desarrollar una interfaz web que permitiera a los usuarios interactuar de forma visual y organizada con la información administrada por el backend, facilitando la consulta, captura y gestión de datos dentro del sistema.

Además de cumplir con una necesidad funcional, este proyecto representó una etapa importante en mi crecimiento como desarrollador, ya que me permitió trabajar con conceptos reales de frontend como arquitectura por módulos, integración con librerías UI, formularios, manejo de rutas, consumo de APIs y construcción de pantallas con lógica más allá de una interfaz estática.

## Tecnologías utilizadas

- **Angular 9**
- **TypeScript**
- **Angular Material**
- **Bootstrap**
- **MDBootstrap**
- **PrimeNG**
- **NG Bootstrap**
- **Angular Flex Layout**
- **FullCalendar**
- **Angular Calendar**
- **Highcharts**
- **ECharts**
- **ngx-charts**
- **SweetAlert2**
- **Firebase**
- **RxJS**
- **jQuery**

## Características principales

- Aplicación construida con **Angular 9**
- Navegación entre vistas mediante **Angular Router**
- Formularios para captura y edición de información
- Integración de componentes UI con distintas librerías
- Visualización de datos mediante **gráficas**
- Gestión de eventos y fechas con **calendarios**
- Consumo de servicios externos / backend
- Interfaz dinámica para distintos módulos del sistema
- Base para control de acceso según flujo del usuario

## Enfoque de desarrollo

Este frontend fue desarrollado buscando una estructura clara y funcional para el contexto en el que fue creado. Aunque hoy existen decisiones que podrían optimizarse o modernizarse, para esa etapa ya se planteaban aspectos importantes como:

- separación de responsabilidades
- reutilización de componentes
- uso de librerías especializadas para resolver necesidades concretas
- organización del proyecto para crecer por módulos
- integración con backend para operaciones reales

No fue un proyecto hecho únicamente como maqueta visual, sino como una interfaz conectada con lógica de negocio real.

## Dependencias destacadas

El proyecto integra varias librerías para cubrir distintas necesidades de interfaz, visualización y experiencia de usuario:

### UI y maquetación
- Angular Material
- Bootstrap
- MDBootstrap
- PrimeNG
- NG Bootstrap
- Angular Flex Layout
- Animate.css
- Font Awesome

### Calendarios y fechas
- FullCalendar
- Angular Calendar
- Flatpickr
- angularx-flatpickr
- moment
- date-fns

### Gráficas y visualización
- Highcharts
- highcharts-angular
- ECharts
- ngx-echarts
- ngx-charts

### Utilidades adicionales
- SweetAlert2
- Firebase
- RxJS
- jQuery

## Scripts disponibles

```bash
npm run start:legacy
npm run build
npm run test
npm run lint
npm run e2e
