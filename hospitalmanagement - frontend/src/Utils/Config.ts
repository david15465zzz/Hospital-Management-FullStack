class Config{

}

class DevelopmentConfig extends Config{
    public backendUrl: string = "http://localhost:8080/";
}


class ProductionConfig extends Config{
    public backendUrl: string = "http://localhost:8080/";
   
}

const appConfig = process.env.NODE_ENV === "development"? 
    new DevelopmentConfig() : new ProductionConfig();

export default appConfig;