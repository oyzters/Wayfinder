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
- **Pasa el cursor** (o enfoca con el teclado) sobre una materia → resalta su
  **seriación**: en ámbar las materias que _necesitas antes_ (prerrequisitos) y en
  verde las que _desbloquea_. El resto se atenúa.
- **Prerrequisitos** (barra superior) → alterna las flechas: `Ocultar`,
  `Al pasar` (por defecto) o `Siempre` (todas tenues a la vez).
- **Candado** en una tarjeta → aún no cubres sus prerrequisitos. Es solo
  informativo; puedes marcarla igual.
- **Reiniciar** → borra todo el progreso guardado.

## Estados y colores

- Las **materias apagadas/pastel** están pendientes; se van "encendiendo" con su color
  de bloque conforme avanzas.
- El **color de cada tarjeta** corresponde a su bloque del programa (Ciencias básicas,
  Construcción, Diseño, etc.), igual que en el mapa oficial.

## Estructura

- `src/data/curriculum.js` — todas las materias, bloques, créditos y la
  **seriación** (`PREREQS`: prerrequisitos por materia, tal como las flechas del
  mapa oficial). Única fuente de datos.
- `src/pages/index.astro` — la interfaz, estilos, el overlay SVG de flechas y la
  lógica de guardado.

> Los créditos y bloques se transcribieron del PDF del mapa curricular. Si detectas
> alguna diferencia, edita `src/data/curriculum.js` y se reflejará al instante.

## Licencia

Distribuido bajo la **Licencia MIT**. Puedes usar, copiar, modificar y distribuir
el software libremente, conservando el aviso de copyright. Consulta el archivo
[`LICENSE`](./LICENSE) para el texto completo.

© 2026 **Manuel Cortez y Sebastián Escalante (Oyzters)**. Todos los derechos
reservados.
