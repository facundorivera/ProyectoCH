function OpenSide() {
    //Index
    if (document.getElementById("index")) {
        document.getElementById("banner").style.display = "none";
        document.getElementById("btnBurger").style.display = "none"
        document.getElementById("mySidevar").style.display = "block";
    }
        //Nosotros

    if (document.getElementById("us")) {
        document.getElementById("close").style.display = "none";
        document.getElementById("mySidevar").style.display = "block";
        document.getElementById("btnBurger").style.display = "none"
    }
        //Conctacto
    if (document.getElementById("contact")){
        document.getElementById("sideContact").style.display = "none";
        document.getElementById("mySidevar").style.display = "block";
        document.getElementById("btnBurger").style.display = "none"
    }
    if(document.getElementById("gulas")){
        document.getElementById("products").style.display="none"
        document.getElementById("mySidevar").style.display="block"
        document.getElementById("btnBurger").style.display="none";
    }
    if(document.getElementById("galery")){
        document.getElementById("galeria").style.display="none"
        document.getElementById("mySidevar").style.display = "block";
        document.getElementById("btnBurger").style.display = "none"
    }
    




}

function CloseSide() {
    if (document.getElementById("index")) {
        document.getElementById("mySidevar").style.display = "none";
        document.getElementById("banner").style.display = "block";
        document.getElementById("btnBurger").style.display = "block"
    }

    if (document.getElementById("us")) {
        document.getElementById("mySidevar").style.display = "none";
        document.getElementById("close").style.display="grid";
        document.getElementById("btnBurger").style.display = "block"
    }
    if (document.getElementById("contact")){
        document.getElementById("mySidevar").style.display = "none";
        document.getElementById("sideContact").style.display = "grid";
        document.getElementById("btnBurger").style.display = "block"
    }
    if(document.getElementById("gulas")){
        document.getElementById("mySidevar").style.display="none";
        document.getElementById("products").style.display="grid";
        document.getElementById("btnBurger").style.display="block";
    }
    if(document.getElementById("galery")){
        document.getElementById("mySidevar").style.display="none";
        document.getElementById("galeria").style.display="grid";
        document.getElementById("btnBurger").style.display="block";
    }

}