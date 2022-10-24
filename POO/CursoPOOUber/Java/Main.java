class Main{
 public static void main(String[] args){
    System.out.println("Hola Mundo");
    UberX uberX = new UberX("AMQ123", new Account("Jose Martinez", "AND123" ), "Chevrolet", "Sonic");
    uberX.setPasseger(4);
    uberX.printDataCar();
}
}