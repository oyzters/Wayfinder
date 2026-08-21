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

## Arranque en 2 clics

La primera vez que abres Wayfinder te pregunta **en qué semestre vas**. Con un
clic marca como completado todo lo anterior y ese semestre como _en curso_;
después solo corriges las excepciones (lo que reprobaste o adelantaste). No hay
que dar de alta nada.

## Qué te dice de un vistazo

- **Te faltan N materias · X créditos · ~Y semestres.** Los semestres salen del
  mayor entre la cadena de seriación más larga que te queda (no puedes ir más
  rápido que eso) y lo que tarda la carga promedio del plan en absorber lo que
  falta.
- **Avance por semestre** (`6/8`) en la cabecera de cada columna. Cuenta lo
  mismo que marca "Completar hasta este semestre": la columna **más el inglés
  y la tutoría** de ese semestre.
- **Ver → Cursando / Puedo llevar.** Atenúa el resto del mapa y deja solo lo que
  responde la pregunta. "Puedo llevar" = prerrequisitos cubiertos y que no estés
  cursando ya. No cambia el estado de nada.
- **Costo de reprobar.** Al pasar el cursor sobre una materia sin completar,
  aparece cuántas materias quedan bloqueadas detrás de ella (cierre transitivo
  de la seriación).

## Interacción

- **Clic** en una materia → avanza de estado (Pendiente → Planeada → En curso → Completada).
- **Clic derecho** → retrocede de estado.
- **Shift + clic** → aplica el estado de la última materia clicada a todo el
  rango entre ambas, dentro de la misma columna.
- **Pasa el cursor** (o enfoca con el teclado) sobre una materia → resalta su
  **seriación**: en ámbar las materias que _necesitas antes_ (prerrequisitos) y en
  verde las que _desbloquea_. El resto se atenúa.
- **Prerrequisitos** (barra de acciones) → alterna las flechas: `Ocultar`,
  `Al pasar` (por defecto) o `Siempre` (todas tenues a la vez).
- El botón **?** de la barra resume todas las interacciones. Los colores de
  estado se leen en los recuadros de la barra superior (Completadas / En curso /
  Planeadas / Pendientes), que hacen de leyenda y además llevan el conteo.
- **Candado** en una tarjeta → aún no cubres sus prerrequisitos, y **bloquea de
  verdad**: ver "El candado" más abajo.
- **Reiniciar** → borra todo el progreso guardado y vuelve a ofrecer el arranque
  en 2 clics.

## El candado

Una materia con el candado cerrado **no puede pasar a "En curso" ni a
"Completada"**: no la puedes estar llevando ni haber aprobado si te faltan sus
prerrequisitos. Sí puede quedar en **Pendiente** o **Planeada** — planear a
futuro siempre vale.

Al intentarlo, el candado **rebota en rojo** y la tarjeta dice qué te falta
(`Primero: Programación I con Lab`, o `Primero: Programación III +2 más` cuando
son varias; la lista completa está en el tooltip de la tarjeta).

La regla vive en un solo punto (`allowed()`), así que **ninguna vía la esquiva**:

| Vía | Con candado |
|---|---|
| Clic (avanzar) | se detiene en Planeada y avisa |
| Clic derecho (retroceder) | salta los estados bloqueados → Pendiente ↔ Planeada |
| Shift + clic (rango) | las bloqueadas quedan en Planeada |
| Completar hasta el semestre N | las bloqueadas quedan en Planeada |

En la práctica el arranque en 2 clics no se ve afectado: como marca los
semestres en orden, cada materia ya tiene sus prerrequisitos cubiertos cuando le
toca (verificado en los 8 semestres, sin una sola degradación).

> **Límite conocido:** la regla bloquea la *acción*, no audita el estado. Si
> completas una materia y después **des-marcas** un prerrequisito suyo, la
> primera se queda como estaba. Se prefirió eso a un efecto dominó que borrara
> avance con un solo clic derecho.

## Llevarte tu avance a otra computadora

Todo vive en `localStorage`, así que cambiar de navegador o entrar en incógnito
te deja en blanco. **Copiar liga** resuelve eso sin servidor: empaqueta tu avance
en la propia URL y lo copia al portapapeles. Al abrir esa liga, la app
reconstruye el avance y limpia el hash (recargar no la vuelve a aplicar).

- Si el navegador destino no tiene progreso, se aplica solo.
- Si ya tenía, se pregunta cuál conservar antes de pisar nada.
- Si la liga no se puede leer, lo dice y **no toca tu avance**.

Es una **foto, no sincronización**: si sigues avanzando después de copiarla, la
liga que mandaste sigue siendo la de ese momento.

El fragmento (`#…`) nunca se manda al servidor — los navegadores no lo incluyen
en la petición HTTP. Tu avance no toca la red ni con la app desplegada.

### Formato de la liga (v2, 23 caracteres)

| Byte | Contenido |
|---|---|
| 0 | Versión del formato |
| 1–15 | 2 bits por materia (4 estados), en el orden de `ALL_COURSES` |
| 16 | Checksum (suma rodante `s = s*31 + byte`) |

Los nombres no se guardan: el índice en `ALL_COURSES` **es** la posición de los
bits. El **largo** detecta ligas cortadas o de un mapa con distinto número de
materias; el **checksum** detecta caracteres alterados que respetan el largo.
Sin checksum, el 92% de esos cambios pasaba como avance válido pero equivocado,
porque las 4 combinaciones de 2 bits son los 4 estados y no sobra ninguna que
delate un bit volteado. Medido sobre el formato actual: de 12 000 ligas con un
carácter alterado, **ninguna** se cuela; con dos o tres, ~0.3 %.

> **Al tocar `curriculum.js`, sube `LINK_VERSION`.** Agregar o quitar materias ya
> se atrapa por largo, pero **reordenar o reemplazar** manteniendo el total
> produciría ligas viejas que cuadran y aplican estados corridos. Subir la
> versión las rechaza en vez de malinterpretarlas.

El progreso se guarda bajo `wayfinder:v1:isw` (una key por mapa). Si venías de la
key global anterior (`wayfinder:v1`), se migra sola la primera vez.

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

### Nota para quien toque el ruteo de flechas

`layoutWires()` mide la rejilla con **`offsetLeft/offsetTop/offsetWidth/offsetHeight`,
nunca con `getBoundingClientRect()`**. Los rects incluyen los `transform` de CSS,
y varias tarjetas los llevan (`en_curso` va a `scale(1.045)`, el hover levanta
2px). Medir con rects hacía que:

- una tarjeta escalada apareciera como una **fila fantasma** 3px arriba, lo que
  daba `GAP = -127` en vez de 12 y mandaba los canales horizontales al centro de
  las tarjetas en vez de a los huecos;
- el trazo **cambiara solo con mover el cursor** o marcar una materia, porque
  cualquier relayout (cambiar de pestaña, redimensionar, el `ResizeObserver`)
  volvía a rutear con la geometría perturbada.

`offsetTop`/`offsetLeft` son enteros, relativos a `.map` (su `offsetParent`, sin
borde ni padding → mismo origen) e inmunes a `transform`. Las filas se leen de
**una sola columna** (la más larga) por la misma razón. Además, el overlay va en
`z-index: 0` y las tarjetas en `1`: si alguna ruta llegara a rozar una tarjeta,
pasa por detrás y no le raya la cara.

> Los créditos y bloques se transcribieron del PDF del mapa curricular. Si detectas
> alguna diferencia, edita `src/data/curriculum.js` y se reflejará al instante.

## Licencia

Distribuido bajo la **Licencia MIT**. Puedes usar, copiar, modificar y distribuir
el software libremente, conservando el aviso de copyright. Consulta el archivo
[`LICENSE`](./LICENSE) para el texto completo.

© 2026 **Manuel Cortez y Sebastián Escalante (Oyzters)**. Todos los derechos
reservados.
