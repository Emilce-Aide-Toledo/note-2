- ¿Qué es la lógica?
- ¿Qué es un conjunto?
- Teoría de graficas
- Árboles
- Algoritmos

https://docs.google.com/presentation/d/1bdmgfEEM0Zgv_D6PFND1MLv3MtVJHIC_/edit?usp=share_link&ouid=107911106433886468726&rtpof=true&sd=true


---
***¿Qué es la lógica?***

Es todo lo que tu cerebro piensa con base a lo que para ti es coherente, está estructurado y tiene sentido.
En este curso nos vamos a centrar en la lógica proposicional, que como su nombre lo indica se basa en proposiciones o afirmaciones.

***¿Qué es una proposición o afirmación?***

No es más que una sentencia, oración o enunciado al cual le puedes dar algún de verdadero o falso. Ni las pregunta, las órdenes y los deseos contaran como proposiciones.

En la lógica proposicional, nos interesa saber la relación que hay entre estas.

Existen dos tipos de proposiciones, las simples y las compuestas:

- Las proposiciones simples tienen un valor de verdadero o falso, son representadas por la letra p, q, r, s, t.

- Las proposiciones compuestas como su nombre lo indica están compuestas por proposiciones simples. Estas proposiciones necesitan conectores lógicos para unir las diferentes proposiciones simples que la integren.

Existen múltiples conectores lógicos, entre ellos se encuentran la conjunción, disyunción, implicación, equivalencia y negación.

Antes de pasar a ver como los conectores lógicos interactúan con las proposiciones simples para poder realizar una proposición compleja debemos entender un concepto más de las proposiciones complejas, el valor de verdad. Así como una proposición simple puede tener un valor de verdadero o falso, las proposiciones complejas tienen un valor de verdad el cual puede ser verdadero o falso.

Las opciones de valor de verdad de una proposición compleja van a depender del numero de proposiciones simples que contenga, una forma rápida de calcular el numero de opciones es elevando 2 al número de proposiciones simples que contenga. Esto nos servirá para evaluar una tabla de verdad, la cual nos va a mostrar el valor de verdad de una proposición compuesta.

La tabla de verdad de una **Conjunción** nos muestra que, para que el valor de verdad de una conjunción sea verdadero ambas proposiciones simples deben ser verdaderas, si alguna es falsa o ambas son falsas entonces el valor de verdad será falso.

Para la **Disyunción débil** si una de las proposiciones simples es verdadera entonces el valor de verdad será verdadero, si todas las proposiciones simples son falsas entonces el valor de verdad será falso. Por otro lado, la Disyunción fuerte va a tener su valor de verdad verdadero solo cuando una de las proposiciones sea verdadera y la otra falsa, de otro modo el valor de verdad será falso.

El valor de verdad de un **Condicional** solamente será falso cuando la primera preposición sea verdadera y la segunda sea falsa, para los demás casos el valor de verdad será verdadero.

**Bicondicional** tendrá valor de verdad verdadero solo cuando ambas preposiciones tengan el mismo valor de verdad, si alguna es falsa y la otra es verdadera entonces el valor de verdad de una tabla Bicondicional será falso.

Obtener el valor de verdad de la Negación es bastante fácil, si la preposición era verdadera entonces pasara a ser falso y viceversa.

***Tipos de conectores lógicos***

- Conjunción: y (∨) Sólo es verdad si ambas proposiciones son verdad. Ejemplo: Es de noche y hace frío.

- Disyunción débil: o (∧) Solo es falsa si ambas proposiciones on falsas. Ejemplo: estoy programando o estoy escuchando música

- Disyunción fuerte o…o (Δ) Será verdad si sólo una de las proposiciones se cumplen. Ejemplo: O está en su casa o está en la oficina

- Condicional si…entonces (⇒) Es falso sólo en el caso de que la primera condición se cumpla y la segunda no. - Subordina la segunda proposición (consecuente) a la primera (antecedente). Ejemplo: Si llueve entonces el río crecerá

- Bicondicional: si y solo si (⇔) es verdad solo si ambas son positivas o ambas son falsas. Ejemplo: Aprobarás el examen si y sólo si estudias.

- Negación. no ~. Cambiará el estado de verdad de la proposición, Ejemplo: no está lloviendo

![](https://userscontent2.emaze.com/images/1e11cba2-6d0c-47f7-8f4e-2ffec24f1188/3c9c8a22-18d5-4c8f-9603-53f28c16db26.png)

## Tablas de verdad
---
Existen tres términos importantes en las tablas de verdad:

• Tautología: se da cuando todas las opciones de una tabla te dan verdadero.

• Contradicción: se logra cuando todas las opciones son falsas.

• Contingencia: se da cuando algunas opciones son falsas y algunas son verdaderas.

Al momento de construir una tabla de verdad lo primero que debes hacer es mirar cuantas proposiciones simples tienes, después evalúa los conectores lógicos que tengas y ve realizando las proposiciones complejas dando prioridad a las que se encuentran dentro de paréntesis.

![](https://i.ibb.co/6gbKzyH/lo.png)
Recuerda que el número de opciones de una preposición compleja esta dado por 2 elevado a la n, donde n es el número de preposiciones simples.

Recuerda tener presentes las tablas de verdad de las operaciones que vayas a realizar para apoyarte en ellas.

![](https://i.ibb.co/s3LLdh8/1.png)

![](https://i.ibb.co/k3VZ5s8/2.png)

## Circuitos lógicos
---

**¿Qué es un circuito lógico?**

Es una serie de elementos que cumple las leyes de la lógica y que nos permite representar proposiciones complejas, cumpliendo las leyes de los circuitos eléctricos.

En un circuito eléctrico tenemos un generador que proporcionara energía a, por ejemplo, una bombilla. En este caso la energía pasara libremente siempre y cuando los interruptores que conformen dicho circuito estén todos cerrados.

Así como en la lógica vemos que las proposiciones pueden tener un valor de verdadero o falso, en un circuito un interruptor puede estar cerrado o abierto, esto es igual que representar a verdadero como 1 y a falso como 0.

Dentro de los circuitos, el conector lógico de **Conjunción** es igual a un circuito en serie. Por otro lado, la **Disyunción** se representa como un circuito en paralelo.

![](https://static.platzi.com/media/user_upload/2021-05-08_11h58_47-a1b3b841-0182-4fab-adad-1204de13b01c.jpg)

![](https://static.platzi.com/media/user_upload/2021-05-08_12h03_53-aee018b5-4aa4-4ff8-8497-9f99a72728fe.jpg)


![](https://i.ibb.co/LC34c90/aa.png)

![](https://i.ibb.co/SwGNC7N/qqq.png)

![](https://static.platzi.com/media/user_upload/IMG_0140-f891856d-7e02-43c4-84d5-6bfb501050b7.jpg)

Recuerda que para el conector lógico de Conjunción lo representamos con un circuito en serie mientras que para la Disyunción usamos un circuito en paralelo.



