![](https://i.ibb.co/pyPMPfb/Captura-de-Pantalla-2022-05-03-a-la-s-8.webp)

**API REST** es una API diseñada bajo los principios de REST y es útil para interacciones simples. En otras palabras, son el puente de comunicación entre frontend y backend.

**REST** es un acrónimo que significa Representational State Transfer o transferencia de estado representacional en español.

### Qué es una API REST o API RESTful
Una API RESTful es una interfaz que utiliza los principios de REST para comunicarse hacia y desde un servidor. El principio más importante en las APIs RESTful es el uso de los métodos HTTP:  [Métodos de petición HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Methods "Métodos de petición HTTP")

Estos métodos son empleados por los clientes para crear, manipular y eliminar datos en los servidores, respectivamente.

### Qué es una API
La palabra API es un acrónimo que significa Interfaz de Programación de Aplicaciones (Application Programming Interface). Es un sistema que funciona como intermediario entre diferentes aplicaciones de software y su función es permitir que estas aplicaciones puedan comunicarse entre sí. Cada vez que usas una app como WhatsApp, Instagram o Facebook, estás usando una API sin saberlo.

**Elementos de una API REST o API RESTful**

Para que una API sea REST esta debe de funcionar bajo tres conceptos:
- Recurso: todo dentro de una API RESTful debe ser un recurso.
- URI: los recursos en REST siempre se manipulan a partir de la URI, identificadores universales de recursos.
- Acción: todas las peticiones a tu API RESTful deben estar asociadas a uno de los verbos de HTTP: GET para obtener un recurso, POST para escribir un recurso, PUT para modificar un recurso y DELETE para borrarlo.

### Qué es REST
REST es un estilo de arquitectura de software enfocado en el intercambio de recursos y basado en HTTP. Le agrega una capa muy delgada de complejidad y abstracción a HTTP. Mientras que HTTP es transferencia de archivos, REST se basa en la transferencia de recursos.

**En qué casos sí conviene usar REST:**

Conviene usarlo cuando las interacciones son simples, dónde lo que queremos hacer son las operaciones básicas de crear un recurso, quitar recursos o modificarlos. También cuando los recursos de hardware son limitados, por que como es muy cercano al HTTP no hay más que necesitemos instalar.

**Cuando no conviene usar REST:**

Cuando las interacciones son un poco más complejas, es decir necesitamos que el servidor aporte más lógica, ejemplo: la validación de algún documento.

**Cómo funciona REST**

REST es un conjunto de principios que definen la forma en que se deben crear, leer, actualizar y eliminar los datos. Es una arquitectura conocida como cliente-servidor, en la que el servidor y el cliente actúan de forma independiente, siempre y cuando la interfaz sea la misma al procesar una solicitud y una respuesta, que son los elementos esenciales.

El servidor expone la API REST y el cliente hace uso de ella. El servidor almacena la información y la pone a disposición del usuario, mientras que el cliente toma la información y la muestra al usuario o la utiliza para realizar posteriores peticiones de más información.

**REST es muy útil cuando:**
- Las interacciones son simples.
- Los recursos de tu hardware son limitados.

Flujo de comunicación entre usuarios, frontend y backend

![](https://i.ibb.co/7QQSBNN/Response-del-servidor-con-el-HTML-del-home-de-Platzi-2.gif)

#### Endpoints y query parameters

Una buena RESTful API que cumple con todos los constrainst de REST debería tener una clara documentación que especifique cada uno de los endpoints y query parameters disponibles para solicitar, editar, crear o eliminar recursos en el servidor

 ![](https://i.ibb.co/3Fx0KVv/gAYHTI0.png)
 
 #### HTTP Status Codes
Los códigos de estado HTTP se dividen en 5 «tipos», incluyen:

- **1XX**:  la solicitud iniciada por el navegador continúa.
- **2XX**: los códigos con éxito regresaron cuando la solicitud del navegador fue recibida, entendida y procesada por el servidor.
- **3XX**: Códigos de redireccionamiento devueltos cuando un nuevo recurso ha sido sustituido por el recurso solicitado.
- **4XX**: Códigos de error del cliente que indican que hubo un problema con la solicitud.
- **5XX**: Códigos de error del servidor que indican que la solicitud fue aceptada, pero que un error en el servidor impidió que se cumpliera.

### ¿Qué es una API KEY?
 ![](https://i.ibb.co/VWV783X/Zo66y0B.png)
 
 ### Qué son los Métodos HTTP
Un protocolo especifica reglas en la comunicación entre dos entes, en este caso entre dos computadoras. HTTP (Hyper Text Transfer Protocol) fue creado específicamente para la web.

Una de las cosas que especifica el protocolo HTTP son los verbos:

**GET:** solicita dato/ recurso.

**HEAD:**  solicita encabezados HTTP del servidor como si el documento se solicitara mediante el método HTTP GET . La única diferencia entre las solicitudes HTTP HEAD y GET es que para HTTP HEAD, el servidor solo devuelve encabezados sin cuerpo. Ver: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

**POST:**  envia dato/ recurso.

**PUT:** reemplaza por completo un recurso.

**PATCH:** reemplaza parcialmente un recurso.

**DELETE:** elimina un recurso.


## HTTP headers

Los headers de API son como una fuente adicional de información para cada llamada de API que realiza. Su trabajo es representar los metadatos asociados con una solicitud y respuesta de API.

### Header de autorización
HTTP nos brinda un marco general para el control de acceso y autenticación. El esquema de autenticación HTTP más común es la autenticación "Basic". 
Ver: https://developer.mozilla.org/es/docs/Web/HTTP/Authentication

### Header de Content-Type

Ver: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type

Ver: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
-Application: {

`application/json, `

`application/xml,`

`application/zip,`

`application/x-www-form-urlencoded: "para enviar datos de formularios HTML"`
}

Envío de archivos de audio literalmente
-Audio: {

`audio/mpeg,`

`audio/x-ms-wma,`

`audio/vnd.rn-realaudio,`

`audio/w-wav`
}

-Image: {

`image/gif,`
`image/jpeg,`
`image/png,`
`image/x-icon, `
`image/svg+xml`
}

Video: {

`video/mpeg,`
`video/mp4,`
`video/quicktime,`
`video/webm`
}

Multipart: {

`multipart/mixed,`
`multipart/alternative,`
`multipart/related,`
`multipart/form-data:`
}

Text: {

`text/css,`
`text/csv,`
`text/html,`
`text/plain,`
`text/xml`
}

VND: {

`application/vnd.ms-excel,`
`application/vnd.ms-powerpoint,`
`application/msword`
}

**FormData: **

Ver: https://developer.mozilla.org/es/docs/Web/API/FormData
