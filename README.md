# Wayfinder

Seguimiento visual del mapa curricular de **Ingeniero en Software 2023 (ITSON)**.
Marca tus materias como **Pendiente**, **Planeada**, **En curso** o **Completada**
y observa tu progreso por créditos y por bloque. Todo se guarda **localmente en tu
navegador** (localStorage), sin servidores ni cuentas.

## Cómo usarlo

```bash
npm install      # solo la primera vez
npm run dev      # abre http://localhost:4321
```

Para generar la versión estática (una carpeta `dist/` que puedes abrir o subir a
cualquier hosting):

```bash
npm run build
npm run preview  # previsualiza el build
```

## Interacción

- **Clic** en una materia → avanza de estado (Pendiente → Planeada → En curso → Completada).
- **Clic derecho** → retrocede de estado.
- **Reiniciar** → borra todo el progreso guardado.

## Estados y colores

- Las **materias apagadas/pastel** están pendientes; se van "encendiendo" con su color
  de bloque conforme avanzas.
- El **color de cada tarjeta** corresponde a su bloque del programa (Ciencias básicas,
  Construcción, Diseño, etc.), igual que en el mapa oficial.

## Estructura

- `src/data/curriculum.js` — todas las materias, bloques y créditos (única fuente de datos).
- `src/pages/index.astro` — la interfaz, estilos y la lógica de guardado.

> Los créditos y bloques se transcribieron del PDF del mapa curricular. Si detectas
> alguna diferencia, edita `src/data/curriculum.js` y se reflejará al instante.
