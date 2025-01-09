Preguntas Teóricas sobre TypeScript (2 puntos)
- Los estudiantes deberán responder a preguntas sobre los conceptos clave de
TypeScript, incluyendo:
- ¿Qué es TypeScript y para qué se utiliza?

TypeScript es un lenguaje de programación que se basa en JavaScript. Lo que lo hace especial es que agrega tipos a JavaScript.
Los tipos son como etiquetas que dicen qué tipo de datos estás usando, como números o texto. Esto ayuda a encontrar errores antes de que el programa se ejecute, lo que hace que sea más fácil escribir y mantener el código.

- ¿Cuáles son las principales diferencias entre TypeScript y JavaScript?

Característica
TypeScript
JavaScript
Tipado
Estático, fuerte
Dinámico, débil
Verificación de tipos
En tiempo de compilación
En tiempo de ejecución
Soporte de IDE
Mejor autocompletado y
refactorización
Autocompletado limitado
Compatibilidad
Compila a JavaScript
Nativo en navegadores


Ventajas:
Tipado estático: Detección temprana de errores y mejor legibilidad del código.
Herramientas de desarrollo: Mejora las herramientas de desarrollo con autocompletado y análisis de código más robustos.
Escalabilidad: Más adecuado para proyectos a gran escala y equipos grandes.

Desventajas:
Curva de aprendizaje: Requiere aprender conceptos adicionales como tipos y interfaces.
Tiempo de compilación: Aumenta el tiempo de compilación debido al proceso de transpilación a JavaScript.


- ¿Por qué es útil TypeScript en el desarrollo de aplicaciones ReactJS?

TypeScript mejora la calidad y mantenibilidad del código en aplicaciones ReactJS al:

Detectar errores temprano: Encuentra errores durante el desarrollo.
Autocompletado y navegación: Facilita la escritura y mantenimiento del código.
Definir tipos de propiedades: Hace el código más claro y entendible.
Permitir refactorización segura: Facilita realizar cambios sin errores.
Proveer documentación implícita: Ayuda a otros desarrolladores a entender el código.



- ¿Qué es el sistema de tipos en TypeScript y cómo ayuda a evitar errores en
tiempo de desarrollo?

El sistema de tipos en TypeScript es una herramienta que permite definir y restringir los tipos de datos (como números, textos, objetos, etc.) que se pueden usar en el código. Las características más importantes de TypeScript son:

Definición de tipos: Puedes especificar qué tipo de datos se espera en una variable, función o propiedad. Por ejemplo, puedes declarar que una variable debe ser siempre un número.
Detección de errores: Al definir tipos, TypeScript puede detectar errores de tipo en tiempo de desarrollo. Por ejemplo, si intentas asignar un texto a una variable que debería ser un número, TypeScript marcará un error antes de ejecutar el código.
Autocompletado: Los editores de código que soportan TypeScript pueden ofrecer sugerencias y autocompletado basados en los tipos definidos, lo que facilita escribir código correctamente y más rápido.
Refactorización segura: Al tener los tipos definidos, hacer cambios en el código es más seguro, ya que TypeScript se asegura de que los tipos coincidan correctamente en todo el proyecto.
Documentación implícita: Los tipos actúan como documentación que describe qué se espera en cada parte del código, lo que facilita entender y mantener el proyecto.

En resumen, el sistema de tipos de TypeScript ayuda a evitar errores, mejora la productividad y hace que el código sea más claro y mantenible.

2. Ejercicio Práctico: Definiendo Tipos e Inferencia (1 punto)
- En este ejercicio práctico, los estudiantes deberán definir y utilizar tipos en una función
de ReactJS. Se les proporcionará una función que toma como parámetro datos sobre
doctores del hospital, y deberán definir los tipos correctos para los parámetros y el valor
de retorno.

- Además, se evaluará cómo TypeScript infiere los tipos automáticamente en
ciertos casos.



3. Definición de Interfaces y Clases en TypeScript (1 punto)
- Los estudiantes deberán definir una interfaz para representar los datos de un doctor y
una clase que implemente esta interfaz. Esta clase deberá contener métodos para
obtener información detallada de los doctores del hospital y actualizar su especialidad.
- Se evaluará si la interfaz y la clase están correctamente definidas y si cumplen
con las reglas de TypeScript.

4. TypeScript y ReactJS: Implementación Básica en un Componente
(1.5 puntos)
- Los estudiantes deberán crear un componente funcional en ReactJS utilizando
TypeScript. El componente debe recibir props que representen los datos de un doctor y
mostrar esta información en la interfaz.
- Se evaluará el uso de props tipados en TypeScript y la correcta implementación
de tipos en el componente.

5. Ventajas de TypeScript en el Desarrollo con ReactJS (1 punto)
- Se evaluará la comprensión de los estudiantes sobre las ventajas de utilizar TypeScript
en proyectos basados en ReactJS. Esto puede incluir la detección temprana de errores,
la autocompletación en editores de código, y la mejora en la productividad y el
mantenimiento del código.
- Se pedirá a los estudiantes que den ejemplos de cómo TypeScript mejora el
desarrollo en React en comparación con JavaScript puro.
