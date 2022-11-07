import java.util.Map;
import java.util.ArrayList;

class UberVan extends Car {
    Map<String, Map<String,Integer>> typeCarAccepted;
    ArrayList<String> seatsMaterial;
    private Integer passeger;

    public UberVan(String license, Account driver, 
    Map<String, Map<String,Integer>> typeCarAccepted,
    ArrayList<String> seatsMaterial){
        super(license, driver);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;
       
    }

    @Override
    public void setPasseger(Integer passeger) {
        if(passeger == 6){
            this.passeger = passeger;
        }else{
            System.out.println("Necesitas asignar 6 pasajeros");
        }
    }
    
}

