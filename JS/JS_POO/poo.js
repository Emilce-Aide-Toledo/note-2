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