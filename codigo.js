var villa = document.getElementById("villa");
var papel = villa.getContext("2d");



var fondo = {
    url: "tile.png",
    cargaLista: false
};

var logo = {
    url : "logo.png",
    cargaLista: false
};

var vaca = {
    url : "vaca.png",
    cargaLista : false,
    x: aleatorio(10, 420),
    y: aleatorio(10, 420),
    moverVaca: false
};

var cerdo = {
    url : "cerdo.png",
    cargaLista : false,
    x: aleatorio(10, 420),
    y: aleatorio(10, 420),
    moverCerdo: true
};

var pollo = {
    url : "pollo.png",
    cargaLista : false,
    x: aleatorio(10, 420),
    y: aleatorio(10, 420),
    moverPollo: false
};

logo.imagen = new Image();
logo.imagen.src = logo.url;
logo.imagen.addEventListener("load", cargarLogo);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load" , cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load" , cargarPollo);

function dibujar()
{
    if(fondo.cargaLista)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if(logo.cargaLista)
    {
        papel.drawImage(logo.imagen, 450, 10);
    }
    
    if(vaca.cargaLista)
    {   
        papel.drawImage(vaca.imagen, vaca.x, vaca.y)
    }

    if(pollo.cargaLista)
    {
        papel.drawImage(pollo.imagen, pollo.x, pollo.y)
    }

    if(cerdo.cargaLista)
    {
        papel.drawImage(cerdo.imagen, cerdo.x, cerdo.y);
    }
}

function cargarLogo()
{
    logo.cargaLista = true;
    dibujar();
}

function cargarFondo()
{
    fondo.cargaLista = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaLista = true;
    dibujar();
}

function cargarCerdo()
{
    cerdo.cargaLista = true;
    dibujar(); 
}


var buttonCerdo = document.getElementById("buttonCerdo");
buttonCerdo.addEventListener("click", () => {
    cerdo.moverCerdo = true;
    vaca.moverVaca = false;
    pollo.moverPollo = true;  

});

var buttonVaca = document.getElementById("buttonVaca");
buttonVaca.addEventListener("click", () => {
    cerdo.moverCerdo = false;
    vaca.moverVaca = true;
    pollo.moverPollo = false; 
    
});

var buttonPollo = document.getElementById("buttonPollo");
buttonPollo.addEventListener("click", () => {
    cerdo.moverCerdo = false;
    vaca.moverVaca = false;
    pollo.moverPollo = true;
});

function cargarPollo()
{
    pollo.cargaLista = true;
    dibujar();
}

function aleatorio(numMin, numMax)
{
    var numero;
    numero = Math.floor(Math.random() * (numMax - numMin + 1))
    return numero;
}

buttonCerdo.addEventListener("mouseover", () =>{
    buttonCerdo.style.color = "yellow";
    buttonCerdo.style.backgroundColor = "red"
    
    buttonVaca.style.color = "black";
    buttonVaca.style.backgroundColor = "white"

    buttonPollo.style.color = "black";
    buttonPollo.style.backgroundColor = "white"
});

buttonVaca.addEventListener("mouseover", () =>{
    buttonVaca.style.color = "yellow";
    buttonVaca.style.backgroundColor = "red"

    buttonCerdo.style.color = "black";
    buttonCerdo.style.backgroundColor = "white"

    buttonPollo.style.color = "black";
    buttonPollo.style.backgroundColor = "white"
});

buttonPollo.addEventListener("mouseover", () =>{
    buttonPollo.style.color = "yellow";
    buttonPollo.style.backgroundColor = "red"

    buttonCerdo.style.color = "black";
    buttonCerdo.style.backgroundColor = "white"

    buttonVaca.style.color = "black";
    buttonVaca.style.backgroundColor = "white"
});
document.addEventListener("keydown", moviminetoPorTeclado);

function moviminetoPorTeclado(evento)
{
    var movimiento = 5;
    switch(evento.keyCode)
    {
        case teclas.LEFT: 
                            if(cerdo.moverCerdo)
                            {
                                dibujar();
                                cerdo.x -= movimiento;
                                if(cerdo.x < -50)
                                {
                                    cerdo.x = 465;
                                }
                            }
                            else if (vaca.moverVaca) 
                            {
                                dibujar();
                                vaca.x -= movimiento;
                                if(vaca.x < -50)
                                {
                                    vaca.x = 465;
                                }
                            }
                            else if (pollo.moverPollo) 
                            {
                                dibujar();
                                pollo.x -= movimiento;
                                if(pollo.x < -50)
                                {
                                    pollo.x = 465;
                                }
                            }
            break;
        case teclas.UP: 
                            
                            if(cerdo.moverCerdo)
                            {
                                dibujar();
                                cerdo.y -= movimiento;
                                if(cerdo.y < -35)
                                {
                                    cerdo.y = 465;
                                }
                            }
                            else if (vaca.moverVaca) 
                            {
                                dibujar();
                                vaca.y -= movimiento;
                                if(vaca.y < -35)
                                {
                                    vaca.y = 465;
                                }
                            }
                            else if (pollo.moverPollo) 
                            {
                                dibujar();
                                pollo.y -= movimiento;
                                if(pollo.y < -35)
                                {
                                    pollo.y = 465;
                                }
                            }
            break;
        case teclas.RIGHT: 
                            if(cerdo.moverCerdo)
                            {
                                dibujar();
                                cerdo.x += movimiento;
                                if(cerdo.x > 480)
                                {
                                    cerdo.x = -40;
                                }
                            }
                            else if (vaca.moverVaca) 
                            {
                                dibujar();
                                vaca.x += movimiento;
                                if(vaca.x > 480)
                                {
                                    vaca.x = -40;
                                }
                            }
                            else if (pollo.moverPollo) 
                            {
                                dibujar();
                                pollo.x += movimiento;
                                if(pollo.x > 480)
                                {
                                    pollo.x = -40;
                                }
                            }
            break;
        case teclas.DOWN:
                            
                            if(cerdo.moverCerdo)
                            {
                                dibujar();
                                cerdo.y += movimiento;
                                if(cerdo.y > 470)
                                {
                                    cerdo.y = -35;
                                }
                            }
                            else if (vaca.moverVaca) 
                            {
                                dibujar();
                                vaca.y += movimiento;
                                if(vaca.y > 470)
                                {
                                    vaca.y = -35;
                                }
                            }
                            else if (pollo.moverPollo) 
                            {
                                dibujar();
                                pollo.y += movimiento;
                                if(pollo.y > 470)
                                {
                                    pollo.y = -35;
                                }
                            }
        break;
    }
}


var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    crt: 17,
    R: 82
};