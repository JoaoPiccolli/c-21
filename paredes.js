//classe  = prototipo
class Paredes 
{
    //metodo é igual a função, só não tem o function antes e está dentro da classe.
    //desenhar o prototipo
    constructor(x,y,w,h)
    {

        //parada = estatica
        var options =
        {
            isStatic: true
        }

        //largura
        this.w = w;
        //altura
        this.h = h;

        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world, body);

    }

    //Fazer o nosso corpo aparecer (show = metodo)
    show()
    {
       var pos = this.body.position

        //abrir uma caixa organizadora
        push()
        
        //medir conforme o tamanho da tela (do centro)
        rectMode(CENTER);
        rect(pos.x, pos.y, this.w, this.h);

        //fechar a caixa
        pop();

    }


}

/*
MATRIZES (exemplos)

var paises = ["Brasil", "EUA", "Canada"]

console.log(paises)

push(paises["Japao"]) //puxa e coloca uma nova informação

console.log(paises)

lá no console ele vai aparecer

"Brasil", "EUA", "Canada", "Japão";

se eu for tirar o ultimo elemento da matriz

pop(paises[3]);

console.log(paises)

lá no console ele vai aparecer

"Brasil", "EUA", "Canada";


*/