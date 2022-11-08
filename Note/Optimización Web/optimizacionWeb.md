https://web.dev/why-speed-matters/

https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0

https://web.dev/rail/

https://www.webpagetest.org/

https://www.pingdom.com/

Metricas: https://web.dev/vitals/

https://web.dev/vitals/

## Web Vital


LCP: Larget Contentful Paint

-> Carga

El tiempo que tarda en pintar el mayor elemento visible en la ventana.

FID: First Input Delay

 (Demora del primer input)

-> Interactivo

El tiempo que tarda la página en responder a las acciones del usuario.

El FID mide por el mayor tiempo de respuesta.

CLS: Cumulative Layout Shift 

(Acumulaciones en los altos de los elementos)
-> Estabilidad

Mide todos los cambios inesperados en el layout de una página.


## Proceso de renderizado del navegador

**Etapas de render del navegador**

Es el proceso de tomar el codigo HTML CSS y JS para convertirlos en pixeles en la pantalla

5 etapas:
- Etapa 1 y 2: Object Model
- Etapa 3: Render Tree
- Etapa 4 y 5: Layout / Paint

>Object Model

Es donde se construye el DOM

Construye un árbol de arriba hacia abajo

También se construye el CSSOM


>Render Tree

En este proceso se distingue que va a pintar y que no

>Layout / Paint

Calcula el ancho disponible del viewport para poder pintarlo

![](https://static.platzi.com/media/user_upload/Desktop%20-%201-d8062a03-242b-4576-9d8b-6986b6604518.jpg)

![](https://static.platzi.com/media/user_upload/1-2740f12d-b115-4bc6-a4fd-f7c1e9632672.jpg)

![](https://static.platzi.com/media/user_upload/2-5096828b-f194-49b7-b949-027714bfaa98.jpg)

![](https://static.platzi.com/media/user_upload/render-tree-construction-e961f8ee-97e7-4282-909f-3038da08f8f6.jpg)

## Recursos que bloquean el navegador

*Tanto JavaScript como CSS son recursos bloqueantes*. Esto quiere decir que cada vez que el navegador encuentra estos archivos, debe parar e interpretarlos mientras sigue haciendo parsing del HTML.

Script por defecto

bloquea el parsing durante la descarga y ejecución del script
![](https://static.platzi.com/media/user_upload/script-6b49d095-c6a9-4eac-9d06-567c44bae413.jpg)

Script Defer

descarga el script JS pero no lo ejecuta hasta que se finaliza el parsing del HTML.
![](https://static.platzi.com/media/user_upload/defer-2e3c94f3-a21e-4d1b-9688-0b05e112e761.jpg)

Script Async

descarga el script JS durante el parsing y una vez se termine de descargar lo ejecuta inmediatamente, bloqueando solo una “pequeña” parte del parsing.
![](https://static.platzi.com/media/user_upload/async-4b2b2094-d9f6-4677-847a-11fc3851b871.jpg)