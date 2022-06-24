/*
//комментарии так же как и в С
// дичь заключается в том что можно переносить строку 
document.write("JavaScipt says hello!");// фигня которая выводит как текст в HTML
let peremennaya;// let синтаксис объявление переменной можно как в си через запятую указать переменные а после обьявить тип переменной при помощи каких-то присвоений
peremennaya='peremennaya kotoroy prisvoili znacheniye'
console.log(peremennaya);
var parasha1=2; //тоже тип объявлении переменной он был раньше let и const и лучше вообще про var забыть нахуй
//очередная дичь (для меня) переменным пофиг какой тип в нём будет храниться
let parasha=3;
console.log(parasha);
parasha = 'dich'
console.log(parasha);
console.info("по ходу похоже на log\n");
console.error("выводите в виде ошибки!\n");
console.warn("выводите в виде предупреждения!\n");
console.log("слово + переменная parasha " + parasha + " и что то там\n");
// по поводу переменных похож на python (можно сложить число и строку :|)
let a = 2;
let b = 4;
console.log("все мат. операции лучше выводить по типу внутри скобок (b операция a) : " + (b/a) );
// арифметика простоя + - / * % и т.д.
// тернарные операторы тоже в силе ++ -- += -=  
let str = "12", str1 = "10";
str = Number(str);// преобразовал тип строки в тип число при помощи объекта Number()
console.log(str + Number(str1));// преобразовал тип данных строки в число
// Math. - объект для математических выражений что то по типу библеотеки в C или C++
console.log("число пи - " + Math.PI);
console.log("число эйлера - " + Math.E);
console.log("минимальное число из введённых чисел " + Math.min(1,4,4,-13,23));
// и т.д. с объектом Math. как с библеотекой <math.h>
// условия и фигурные скобки после скобок и switch case  идентичны C или С++ так же про
// циклы и операторы циклов идентичны - С
// лучше соблюдать табуляцию как в Py
// c массивом тоже дичь туда можно впихнуть все типы в один массив
let mas = [];// объявление массива (дичь да и только вообще не надо волновать ся на счёт выделение памяти под массив и лучше забыть про память когда кодишь на JS:| )
console.log(mas);// после изменения снизу все типы просто меняются даже отображение
for (let i = 0; i < 10; i++)
{
  if (i % 2 == 0)
    mas[i] = 'was';
  else
    mas[i] = i;
}
console.log(mas);
let mas1 = [['sdfs','d','df',23],['red',true,23 ,'a'],['dfsf'],['dfsdf']];// объявление 2 мерного массива забудь про память 
console.log(mas1);
console.log("длина массива в данном случае 3 элемента 2 мерного массива mas.length"+mas1[3].length);
//alert("всплывающее окно просто с ОК");
//let usloviye = confirm("всплывающее окно c ОК и ОТМЕНА если OK - true а если Отмена - false");
//console.log(usloviye);// вывод в консоль результата выполнения действия
//let num = Number(prompt("просто текст а через запятую идёт значение по умолчанию",20));
//let num1 = Number(prompt("Первое число"));// вывод на всплывающем окне на странице браузера - prompt("этого текста внутри prompt();")
//let num2 = Number(prompt("Второе число"));// переменная=prompt(); //  что то типо scanf("%d",&переменная); , только ввод осущест в всплывающем окне страницы браузера похоже на Py
//num1 > num2 ? alert("Первое число больше " + num1):num1 < num2 ? alert("Второе число больше " + num2):num1 == num2 ? alert("Числа равны"):alert("Что то пошло не так!")
// null - тип переменных обнуляет переменную

let k=prosto('xaxa');
console.log(k);

function prosto(slovo) //как в С и С++ просто на много проще  и можно обрашаться к функции со всех концов кода тип данных не определён так что нормально можно всё ебашить
{
  console.log("просто функция " + slovo);
  return 27;
}
// можно из любой части вызывать функцию внутри функции
function fillarr(a,n)
{
  for (let i = 0; i < n; i++)
    a[i] = Math.floor((10 * Math.random()) % 10); // Math.random() - радотает с рандомными числами от 0 до 1 не включительно  Math.floor() - взятие целой части числа
}

function summa(a)
{
  for (let i = 1; i < a.length; i++)
    a[0] += a[i];
  return a[0];
}

let mas2 = [];
fillarr(mas2, 10);
console.log(mas2);
console.log("summa chisel v massive "+summa(mas2));

let mas3 = [2,3,5,6,7];//длина 5
let mas4 = [1,6,8,9];  //длина 4
mas3 = mas4; // тут присваение массива может изменить всю структуру другого массива дичь! -> длина 5 стала длиной 4 и присвоила все значение
console.log(mas3);
console.log(mas4);
//основной приоритет созданной переменной только в том которая находится внутри { ... } даже если у него есть идентичная пара за пределом фиг. скобок
let cnt=0;
function vizovFunk(tipo)
{
  cnt++;
  tipo.innerHTML = "ты нажал " + cnt;
  console.log(tipo.name)// через переменную типо могу обратится  к любому атребуту из тега в котором эта функ вызвана  (переменная в образе функ).(и атребут из вызванного тега) 
  tipo.style.background = "black";
  tipo.style.color = "blue";
  tipo.style.cssText = "border-radius :5px; border:0 ; font-size:20px;background : grey; color:red;"// основной приоритет заключается в этом теге .style.cssText неже ли предыдущие 
}

function priVvode(p)
{
  if (p.value == "Hello ")
    alert("Hi");
  console.log(p.value);
}

let textK = document.getElementById('txt1');// даю доступ при помощи id тега к переменой в JS  переменная в JS.document.getElementById('id тега');
// отныне textK отвечает за тег <span id="txt1" ...>
textK.title="просто обычный текст" // просто поменял структуру textK.title на новое раньше было Рагиф дебил а сейчас стало просто обычный текст
console.log(textK.title);
textK.style.color = "orange";// при помощи .style. ... можно поменять тип в этой переменной как в CSS
// если есть дефис в определённом стиле CSS Н-р background-color нужно написать переменная.style.backgroundColor="..."
// нужно начинать с верхнего регистра
textK.style.backgroundColor = "white";
textK.innerHTML = "новый <br> текст ";
// можно и без переменной обращаться к объекту
//document.write("<br>"); переход на новую строку выведет только в конце файла там где находится тег <script>
document.getElementById('text').style.color = "white";
// можно найти объект и через класс при помощи  document.getElementByClassName('text')

let spans = document.getElementsByTagName('span');// поиск объекта по тегу в данном случае много тегов уже  
for(let i = 0; i < spans.length; i++)//будут образовывать целый массив 
{
  console.log(spans[i].innerHTML);// вывод на консоль именно тех значений в теге 
}
*/
/*
в HTML <form id="main-form" onsubmit="return checkForm(this)" method="post">

let confirm1 = document.getElementById('confirm'); 
function checkForm(el)
{
  //let name = document.getElementById('name').value;// можно так или
  let name = el.name.value;
  let pass = el.pass.value;
  let repass = el.repass.value;
  let state = el.state.value;
  if (name == "" || pass == "" || repass == "" || state == "") 
  {
    confirm1.innerHTML = "всё не верно!";
    window.location="https://google.com";// переход на другую страницу вну
  } 
  else
  {
    console.log(name);
    console.log(pass);
    console.log(repass);
    console.log(state);   
    confirm1.innerHTML = "всё верно!";
    window.location='https://google.com';
    //return true;// лучше не отправлять запрос true так как нет серверной части и страница начинает харкать кровью
  }
  return false;
}
let confirm1 = document.getElementById('confirm'); 
document.getElementById('main-form').addEventListener("submit", checkForm);
function checkForm(event)
{
  event.preventDefault(); // отключение перезагрузки страницы
  let el = document.getElementById('main-form');
  let name = el.name.value;
  let pass = el.pass.value;
  let repass = el.repass.value;
  let state = el.state.value;
  if (name == "" || pass == "" || repass == "" || state == "") 
  {
    confirm1.innerHTML = "всё не верно!";
  } 
  else
  {
    console.log(name);
    console.log(pass);
    console.log(repass);
    console.log(state);   
    confirm1.innerHTML = "всё верно!";
  }
}
//HTML
<form id="main-form" method="post">
    <label for="name">Имя:</label>
    <input type="text" name="name" placeholder="Имя" id="name"><br><br>
    <label for="password">Пароль:</label>
    <input type="password" name="pass" placeholder="Пароль" id="pass"><br><br>
    <label for="repass">Проверка пароля:</label>
    <input type="password" name="repass" placeholder="Проверка пароля" id="repass"><br><br>
    <span>Пол:</span>
    <input type="radio" name="state" id="male" value="Мужской">
    <label for="male">Мужской</label>
    <input type="radio" name="state" id="female" value="Женский">
    <label for="female">Женский</label><br><br>
    <input type="submit" name="submit" value="Готово">
  </form>
  <p>
    <b id="confirm"></b>
  </p>
  <br>
*/
/* но так не удобнее
setInterval(function funk()
{
  cnt++;
  console.log("counter: " + cnt);
}, 10000);
// функция которая за опред интервал времени вызывает функцию

let cnt=0;
let chislo=setInterval(funk, 1000);// функция которая за опред интервал времени вызывает функцию
let cnt=0;
function funk()
{
  cnt++;
  console.log("counter: " + cnt);
  if (cnt == 3) // в данном случае остановил при 3 секундах функцию
    clearInterval(chislo); // берёт и очищает весь заданный интервал тоесть останавливает
}// можно так или же внутри setInterval(написать функцию) как сверху
setTimeout(function funkciya() // по сути таймер через сколько секунд сработает функция
{ 
  console.log("vremya 2 sekundi proshlo");
}
  , 2000)// можно так же внутри функции объявить функцию или вне
*/

let date = new Date();// переменная для работы со временем
setInterval(
  function func() {
    console.log(+date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear());
    console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
  }, 1000);   

let date1 = new Date();
date1.setHours(27);// установил своё собственное время и она не будет менять ся 
date1.setMinutes(27);
console.log(date1.getHours() + ":" + date1.getMinutes() + ":" + date1.getSeconds()); // вывод на экран часов при помощи созданной переменной для работы со временем


let mas = [4, 1, 3, 2];
console.log(mas.join(", - "));//вывод в виде строки
console.log(mas.reverse());// revers ,massiva 
console.log(mas.sort());// sortirovka po vozrastaniyu massiva
// mojno rabotat kak s otdelnimi peremennimi
let stroka = mas.reverse().join(" ");
console.log(stroka.split(" "));// razbivayet stroku split() 

class chelovek// poxoj na class v C++ ili struct v C
{
  constructor(name, age, happiness)
  {
    this.name = name;
    this.age = age; 
    this.happiness = happiness;
  }
  informaciyaObyekta()
  {
   console.log("chelovek "+this.name+"\nvozrast "+this.age+"\nuroven schastya "+this.happiness);
  }
  // mpjno eshyo shto to yobnut zdes 
}

let alex = new chelovek('Alex', 45, true);
//console.log(alex.name);// mojno obrashtsya ko vsem obyektam kak v C++
alex.informaciyaObyekta();// вывод информаци объекта из класса












