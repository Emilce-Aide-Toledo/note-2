class Main{
 public static void main(String[] args){
    System.out.println("Hola Mundo");
    Car car = new Car("AMQ123", new Account("Jose Martinez", "AND123" ));
    car.passeger = 4;
    car.printDataCar();
}
}