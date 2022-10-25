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


// Prototipos con la sintaxis de clases
// Utilizando como parámetro objetos
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

  //Parámetros con valores por default 

  class Student3{
    constructor({
      name,
      email, 
      username,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }){
      this.name = name;
      this.email = email;
      this.username = username;
      this.socialMedia ={
        twitter, 
        instagram, 
        facebook,
      };
      this.approvedCourses = approvedCourses;
      this.learningPaths  = learningPaths;
    }
  };

  const emilce = new Student3({
    name: "Emilce",
    username:"emi",
    email: "emi@gmail.com",
    twitter: "emiai",
  });

  //Getters y setters 
 class Course {
  constructor({
    name, 
    classes = [],
  }){
    this._name = name;
    this.classes = classes;
  }

  get name() {
    return this._name;
  }

  set name(newName){
    if(newName === "CSS"){
     console.error("No se puede agregar ese nombre")
    } else {
    this._name = newName;
    }
  }
 };

 const curso1 = new Course({
   name: "CSS Grid",
 });

 curso1.name;
 curso1.name = "Flexbox";