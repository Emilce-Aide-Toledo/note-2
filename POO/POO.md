## Programación Orientada a Objetos
La programación Orientada a Objetos nace de los problemas creados por la programación estructurada y nos ayuda a resolver cierto problemas como:

- Código muy largo: A medida que un sistema va creciendo y se hace más robusta el código generado se vuelve muy extenso haciéndose difícil de leer, depurar, mantener.

- Si algo falla, todo se rompe: Ya que con la programación estructurada el código se ejecuta secuencialmente al momento de que una de esas líneas fallara todo lo demás deja de funcionar.

- Difícil de mantener.

La programación orientada a objetos tiene cuatro pilares o características principales:
- **Encapsulamiento.** Quiere decir que oculta datos mediante código.
- **Abstracción.** Es como se pueden representar los objetos en modo de código.
- **Herencia.** Es donde una clase nueva se crea a partir de una clase existente.
- **Polimorfismo.** Se refiere a la propiedad por la que es posible enviar mensajes sintácticamente iguales a objetos de tipos distintos.

La Programación Orientada a Objetos viene de una filosofía o forma de pensar que es la Orientación a Objetos y esto surge a partir de los problemas que necesitamos plasmar en código.

Es analizar un problema en forma de objetos para después llevarlo a código, eso es la Orientación a Objetos.

Un paradigma es una teoría que suministra la base y modelo para resolver problemas. La paradigma de Programación Orientada a Objetos se compone de 4 elementos:

- Clases
- Propiedades
- Métodos
- Objetos

#### Lenguajes Orientados a Objetos

Algunos de los lenguajes de programación Orientados a Objetos son:

  -- Java
- Orientado a Objetos naturalmente
- Es muy útilizado en Android
- Y es usado del lado del servidor o Server Side

-- PHP
- Lenguaje interpretado
- Pensado para la Web

-- Python
- Diseñado para ser fácil de usar
- Múltiples usos: Web, Server Side, Análisis de Datos, Machine Learning, etc

-- Javascript
- Lenguaje interpretado
- Orientado a Objetos pero basado en prototipos
- Pensado para la Web

-- C#

-- Ruby

-- Kotlin

#### Diagramas de Modelado

**OMT:** Object Modeling Techniques. Es una metodología para el análisis orientado a objetos.

**UML:** Unified Modeling Language o Lenguaje de Modelado Unificado. Tomó las bases y técnicas de OMT unificándolas. Tenemos más opciones de diagramas como lo son Clases, Casos de Uso, Objetos, Actividades, Iteración, Estados, Implementación.
![](https://moqups.com/img/mqlps/images/uml-diagram-tool/Rectangle%2024%20copy%202.png)

Ver: https://platzi.com/clases/1474-oop/17219-uml/

### Objetos
Los Objetos son aquellos que tienen propiedades y comportamientos, también serán sustantivos.

- Pueden ser Físicos o Conceptuales

Las **Propiedades** también pueden llamarse atributos y estos también serán sustantivos. Algunos atributos o propiedades son nombre, tamaño, forma, estado, etc. Son todas las características del objeto.

Los **Comportamientos** serán todas las operaciones que el objeto puede hacer, suelen ser verbos o sustantivos y verbo. Algunos ejemplos pueden ser que el usuario pueda hacer login y logout.

### Abstracción y Clases
Una **Clase** es el modelo por el cual nuestros objetos se van a construir y nos van a permitir generar más objetos.

 Las **Clases** son los modelos sobres los cuales construiremos nuestros objetos.

**Abstracción** es cuando separamos los datos de un objeto para generar un molde.

### Modularidad

La modularidad va muy relacionada con las clases y es un principio de la Programación Orientado a Objetos y va de la mano con el Diseño Modular que significa dividir un sistema en partes pequeñas y estas serán nuestros módulos pudiendo funcionar de manera independiente.

La modularidad de nuestro código nos va a permitir:

- Reutilizar
- Evitar colapsos
- Hacer nuestro código más mantenible
- Legibilidad
- Resolución rápida de problemas

Una buena práctica es separando las clases en archivos diferentes.

### ¿Qué es la herencia?

*Don’t repeat yourself* es una filosofía que promueve la reducción de duplicación en programación, esto nos va a inculcar que no tengamos líneas de código duplicadas.

Toda pieza de información nunca debería ser duplicada debido a que incrementa la dificultad en los cambios y evolución

La **herencia** nos permite crear nuevas clases a partir de otras, se basa en modelos y conceptos de la vida real. También tenemos una jerarquía de padre e hijo.

![](https://static.platzi.com/media/public/uploads/analizando-uber-en-objetos_7648b008-b099-4b0c-a511-a8be36bcd240.png)
![](https://static.platzi.com/media/public/uploads/modelando-nuestros-objetos-uber-1_311f8882-9610-4198-aa89-3b86c2de62b2.png) 
![](https://static.platzi.com/media/public/uploads/modelando-nuestros-objetos-uber-2_02bc1a0c-3810-48e4-947a-d05d00e3c230.png) 
![](https://static.platzi.com/media/public/uploads/aplicando-herencia-a-nuestro-proyecto-uber2_5ba149e0-9792-4e82-9430-84a44b7c1060.png) 
![](https://static.platzi.com/media/public/uploads/aplicando-herencia-a-nuestro-proyecto-uber1_bf088c4f-9198-4a8b-b91a-abe62debf181.png) 
![](https://static.platzi.com/media/public/uploads/aplicando-herencia-a-nuestro-proyecto-uber3_5e853a21-7760-4fc9-9842-3c74d390c0ba.png) 
![](https://static.platzi.com/media/public/uploads/diagrama_10b7b328-fbde-4cc2-b758-0b31ec6f0260.jpg)

### Objetos, método constructor y su sintaxis en código

Los **objetos** nos ayudan a crear instancia de una clase, el objeto es el resultado de lo que modelamos, de los parámetros declarados y usaremos los objetos para que nuestras clases cobren vida.

Los **métodos constructores** dan un estado inicial al objeto y podemos añadirle algunos datos al objeto mediante estos métodos. Los atributos o elementos que pasemos a través del constructor serán los datos mínimos que necesita el objeto para que pueda vivir.


### Herencia: Aplicando herencia en lenguajes
![](https://i.ibb.co/DLTxQKQ/img1.png)

<!-- - Java y PHP: 

*Disclaimer:*
ArrayList solo permite un argumento, por ejemplo: 
```
ArrayList<String> myList;
```
En este caso se necesitan dos argumentos quedaría algo así
```
Map<String, Map<String, Integer>> typeCarAccepted; 
``` -->

### Encapsulamiento

El **Encapsulamiento**es hacer que un dato sea inviolable, inalterable cuando se le asigne un modificador de acceso.

### Polimorfismo

**Polimorfismo:** Muchas formas. Poli = muchas, morfismo = formas. NO es Poliformismo

Es construir métodos con el mismo nombre pero con comportamiento diferente

**Sobrecarga** -> Principalmente con los métodos

**Sobre-escritura** -> Debe haber herencia, Cuando le cambias el comportamiento a un método que definió la super-clase

**Polimorfismo de Subtipado** -> Centrado en usar el mimos nombre de método en diferentes clases, cuando se llamen se ejecutara

## El Diagrama UML de Uber

### Asociación
![](https://static.platzi.com/media/user_upload/associacion-d2e1b691-b6e9-4854-85e2-d3ffdf0a9049.jpg)

Como su nombre lo dice, notarás que cada vez que esté referenciada este tipo de flecha significará que ese elemento contiene al otro en su definición. Si recuerdas la clase Car, este contenía una instancia de Driver. La flecha apuntará hacia la dependencia.
![](https://static.platzi.com/media/user_upload/car-driver-204d198e-60fa-4c57-a0d0-0668c0e011d7.jpg)

### Herencia
![](https://static.platzi.com/media/user_upload/herencia-2eb98d5e-bcad-4162-b236-aa87eba20e76.jpg)
Siempre que veamos este tipo de flecha se estará expresando la herencia.
En nuestro diagrama tuvimos al menos tres familias conviviendo. La dirección de la flecha irá desde el hijo hasta el padre.

**Familia Car**
![](https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%202019-01-24%20a%20la%28s%29%201.24.30-ff45a4c0-dfa8-464b-8590-5d48cfa03eb5.jpg)
**Familia Account**
![](https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%202019-01-24%20a%20la%28s%29%201.24.13-bc9edb69-8909-487b-9619-350dcb933638.jpg)
**Familia Payment**
![](https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%202019-01-24%20a%20la%28s%29%201.24.42-ef7679b6-3b93-45c1-a4d9-1d6a24f4aa2a.jpg)

### Composición
![](https://static.platzi.com/media/user_upload/composicion-1da1dd19-6925-42d9-9727-7fd8cb031b0c.jpg)
Pasemos a una de nuestras piezas claves, pues notarás en el centro del diagrama la clase Trip que está vinculada a User, Car, Route y Payment. La composición va a significar una asociación entre estas clases con la diferencia de que para que esta clase pueda vivir forzosamente necesita a las demás. Es decir que estas clases son obligatorias para que la clase Trip pueda existir, esta dependencia obligatoria podríamos expresarla en el método constructor de la clase Trip, pues para que un objeto pueda ser creado dependerá de que los demás existan.
![](https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%202019-01-24%20a%20la%28s%29%201.46.08-72aaa220-d916-4cae-9ac2-5a8ebe375b80.jpg)
Esta clase Trip poseerá la lógica más fuerte del negocio aquí será donde se concentrarán la mayor cantidad de clases.
