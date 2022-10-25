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

    publicarComentario(commentContent){
      const comment = new Comment ({
        content: commentContent,
        studentName: this.name,
      });

      comment.publicar();
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
    isFree = false,
    lang = "spanish",
  }){
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
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

 
//  class Course2 {
//   #name;

//   constructor({
//     name,
//     classes = []
//   }) {
//     this.#name = name;
//     this.classes = classes;
//   }

//   get name() {
//     return this.#name;
//   }

//   set name(nuevoNombrecito) {
//     if (nuevoNombrecito === 'Curso Malito de Programación Básica') {
//       console.error('Web... no');
//     } else {
//       this.#name = nuevoNombrecito;
//     }
//   }
// }

//Herencia en JavaScript
class FreeStudent extends Student3{
  constructor(props){
    super(props);
  }

  approvedCourses(newCourse) {
    if(newCourse.isFree){
      this.approvedCourses.push(newCourse)
    }else{
      console.warn("Solo puedes tomar cursos gratis");
    }
  }
};

class BasicStudent extends Student3{
  constructor(props){
    super(props)
  }

  approvedCourses(newCourse) {
    if(newCourse.lang !== "english"){
      this.approvedCourses.push(newCourse)
    }else{
      console.warn("No puedes tomar cursos en Inglés");
    }
  }
};

class ExpertStudent extends Student3{
  constructor(props){
    super(props);
  }

  approvedCourses(newCourse){
    this.approvedCourses.push(newCourse);
  }
};

const cursoProgramacion = new Course({
  name: "SQL",
  isFree: true,
});

const cursoReact = new Course({
  name: "React",
  lang: "english",
});

const aide = new BasicStudent({
  name: "Aide",
  username:"aidi",
  email: "aidi@gmail.com",
  twitter: "aidi",
});

const katy = new FreeStudent({
  name: "Katy",
  username:"Katty",
  email: "Katy@gmail.com",
  twitter: "Katt",
});

//Polimorfismo

class Comment {
  constructor({
    content,
    studentName,
    studentRole = "estudiante",
  }){
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar(){
    console.log(this.studentName + "(" + this.studentRole + ")");
    console.log(this.likes + " likes");
    console.log(this.content);
  }
};

class TeacherStudent extends Student3{
  constructor(props){
    super(props);
  }

  approvedCourses(newCourse){
    this.approvedCourses.push(newCourse);
  }

  publicarComentario(commentContent){
    const comment = new Comment ({
      content: commentContent,
      studentName: this.name,
      studentRole: "profesor",
    });

    comment.publicar();
  }
};

const diego = new TeacherStudent({
  name: "Diego",
  username: "diego3",
  email: "diego3@gmail.com",
  instagram: "dgyMaster"
});