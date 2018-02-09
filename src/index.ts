import {numeros} from './racional';
import  './styles.scss';
import  $ from 'jquery';

$(document).ready(function(e) {
  var r,r1,r2,rr,resp: numeros.Racional;

// suma
  $('#suma').on('click',function(){
    procesa_suma();
  });
 //resta
    $('#resta').on('click',function(){
       procesa_resta();
    });

      $('#mult').on('click',function(){
         procesa_mult();
      });

        $('#divi').on('click',function(){
          procesa_div();
        });



        function procesa_suma(){
          r = new numeros.Racional( $("#num1").val() ,$("#dem1").val());
          r2 = new numeros.Racional($("#num2").val() ,$("#dem2").val());
          resp = numeros.Racional.suma(r,r2);
           var resps = resp.disp();
           $("#respuesta").text(resps);

      }
      function procesa_resta(){
        r = new numeros.Racional( $("#num1").val() ,$("#dem1").val());
        r2 = new numeros.Racional($("#num2").val() ,$("#dem2").val());
        resp = numeros.Racional.resta(r,r2);
         var resps = resp.disp();
         $("#respuesta").text(resps);
      }
      function procesa_mult(){
        r = new numeros.Racional( $("#num1").val() ,$("#dem1").val());
        r2 = new numeros.Racional($("#num2").val() ,$("#dem2").val());
        resp = numeros.Racional.mult(r,r2);
         var resps = resp.disp();
         $("#respuesta").text(resps);
      }

      function procesa_div(){
        r = new numeros.Racional( $("#num1").val() ,$("#dem1").val());
        r2 = new numeros.Racional($("#num2").val() ,$("#dem2").val());
        resp = numeros.Racional.divi(r,r2);
         var resps = resp.disp();
         $("#respuesta").text(resps);
      }


});



// $('#coolbutton').click(function(){
//    console.log('lol');
// });



class Saludos {

    saludo(): void {
      console.log('Hello world som ething');
      console.log('something else');
    }
}

// var s: Saludos;
//
// s = new Saludos();
//
// s.saludo();



// sn=prompt("numerador:");
// sd=prompt("Denomador:");

// r31.dispHtml();
// numeros.Racional.move(55);


// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
//
// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeteasdfrs = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeteasdfrs);
//     }
// }
//
// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters:number = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }
//
// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");
//
// sam.move(3);
// tom.move();
