class hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    toAtack(){
        let poder = ""
        switch(this.type){
             case "mago":
                poder = "magia"
                break
            case "guerreiro":
                poder = "espada"
                break
            case "monge":
                poder = "artes marciais"
                break
            case "ninja":
                poder = "shuriken"
                break
            default: 
                poder = "poder não encontrado"
        }
        console.log("O " + this.type + " atacou usando " + poder)
           
    }
}

const heroi1 = new hero("mario", 25, "mago")
heroi1.toAtack()

const heroi2 = new hero("luigi", 23, "guerreiro")
heroi2.toAtack()