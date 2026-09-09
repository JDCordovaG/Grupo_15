# Caso Semestral - BuildMyPC (Frontend) - Evaluación Parcial 1

## 👥 Integrantes
* Juan David Cordova
* Vicente Pizarro
* Ignacio Castro

## 📝 Descripción del Proyecto
BuildMyPC es una plataforma interactiva diseñada para armar computadores gamer personalizados. Este repositorio contiene la **Evaluación Parcial 1 (EP1)**, que abarca la base web del proyecto construida enteramente con **HTML5, CSS3 y JavaScript vanilla** (sin frameworks).

El sistema incluye maquetación mediante Flexbox/Grid, estilos centralizados con variables CSS (utilizando la **Paleta 5: RGB nocturno**), manipulación dinámica del DOM, validación estricta de formularios y cálculos simulados en tiempo real.

## 📂 Estructura de Carpetas
El proyecto está estructurado modularmente según las funcionalidades identificadas:

```text
📦 BuildMyPC
├── 📁 Armador_build/
│   ├── armador.html          # Vista central para seleccionar componentes
│   └── armador.js            # Lógica para cálculo de TDP parcial y costo
├── 📁 Catalogo_componentes/
│   ├── catalogo.html         # Listado de componentes
│   └── catalogo.js           # Renderizado dinámico y lógica de filtros (precio, texto, categoría)
├── 📁 Cotizacion/
│   ├── cotizacion.html       # Formulario final para solicitar la cotización
│   └── cotizacion.js         # Validaciones JS (email, teléfono, bloqueo si hay error)
├── 📁 CSS/
│   └── styles.css            # Hoja de estilos global 
├── 📁 Detalle_componente/
│   └── detalle.html          # Ficha técnica del componente
├── 📁 inicio/
│   ├── index.html            # Página de inicio y landing page (Punto de entrada)
│   └── inicio.js             # Lógica para cargar las configuraciones destacadas
├── 📁 JS/
│   ├── datos.js              # Base de datos simulada compartida
│   └── placeholder-cpu.jpg   # Asset de imagen para placeholder
└── 📁 Resultado_compatibilidad_rendimiento/
    ├── resultado.html        # Vista del semáforo de compatibilidad
    └── resultado.js          # Lógica para evaluación de las reglas de hardware
```

## 🚀 Requisitos Previos
* Un navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
* Ningún requisito de servidor: al ser HTML/CSS/JS plano en esta etapa, los archivos se ejecutan directamente en el navegador.

## ⚙️ Instrucciones de Ejecución
1. Descarga o clona el repositorio/archivo comprimido.
2. Extrae los archivos si se encuentran en un `.zip`.
3. Navega hacia la carpeta extraída.
4. Entra a la carpeta `inicio/` y abre el archivo **`index.html`** haciendo doble clic (o arrástralo hacia tu navegador).
5. Utiliza la barra de navegación superior para recorrer todas las pantallas del sistema de BuildMyPC.

## 🛠️ Aspectos Técnicos Destacados
* **Almacenamiento:** Se utiliza `sessionStorage` de HTML5 para transferir de manera temporal los datos de la build entre el armador, el validador de resultados y la cotización final.
* **Validaciones:** Comprobación del formato de correo mediante RegEx, validación del margen del 20% de la fuente de poder, y chequeos de compatibilidad (Socket, tipo y límite de RAM).
