///cidadao de primeira linha

// criar de forma literal

function fun1(){
    return 1+2
}

console.log(fun1())

// armazena numa const

const fun2 = function (){}
// armazenar em um array

const array = [function(a,b) { return a+b } , fun1, fun2]

console.log(array[0](2,3))

//armazenar em um atributo de objeto

const obj = {}
obj.falar = function(){return 'opa'}
console.log(obj.falar())


// passando uma fun como parametro

function run(fun){
    fun()
}

run(function (){ console.log('ejehjh')})

//retornar/conter uma funcao

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)[4]