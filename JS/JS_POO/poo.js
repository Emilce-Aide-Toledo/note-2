//Objetos literales
const ana = {
    name: "Ana",
    age: 20,
    cursosAprobados:[ "HTML y CSS"],
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}

//Prototipos de funciones
function Student1(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student1.prototype.aprobarCurso = function (nuevoCurso){
    this.cursosAprobados.push(nuevoCurso);
}

//Instancias de prototipo
const juana = new Student1(
    "Juana",
    19,
    ["Matemática Aplicada"],
);

//Prototipo con la sintaxis de Clases
class Student{
    constructor(name, age, cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso) {
      this.cursosAprobados.push(nuevoCurso);
    }
};

const andres = new Student(
    "Andres",
    32,
    [
        "Curso de POO"
    ],
);

// Utilizando como parámetro objetos
// Prototipos con la sintaxis de clases
class Student2 {
    constructor({
      name,
      cursosAprobados = [],
      age,
      email,
    }) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.cursosAprobados = cursosAprobados;
    }
  
    aprobarCurso(nuevoCursito) {
      this.cursosAprobados.push(nuevoCursito);
    }
  }
  
  const maria = new Student2({
    name: "Maria",
    age: 28,
    email: "Maria@gmail.com",
  }); 