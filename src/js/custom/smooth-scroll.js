let elements = document.documentElement,
    body = document.body, //Передаем в переменную body
    links = document.links, //Получаем все якорные ссылки на странице
    scrollTop;

//Функция опредления нажатой ссылки и расчета перемещения
function calcScroll() {

    //Перебор циклом все ссылок и определение той, на которой был сделан клик
    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function (event) {
            event = event || window.event; //Кросс-браузерность
            //Определение и округление текущего расстояния от верха документа
            scrollTop = Math.round(body.scrollTop || elements.scrollTop);
            if (this.hash !== '') {
                //Предотвращение действия браузера по дефолту при отсутвии атрибута hash у элемента
                event.preventDefault();
                //Получение элемента, к которому ведет якорь нажатой ссылки
                let targetElement = document.getElementById(this.hash.substring(1)),
                    //Задел в 80px, чтобы при прокрутке меню не закрывало заголовок секции
                    targetElementTop = -80;
                //Вычисление через цикл расстояния от верха до элемента, к которому ведет нажатая ссылка
                while (targetElement.offsetParent) {
                    targetElementTop += targetElement.offsetTop;
                    targetElement = targetElement.offsetParent;
                }
                //Получение округленного значения расположения элемента
                targetElementTop = Math.round(targetElementTop);
                /* Функция запуска плавного перемещения (содержит аргументы: текущее растояние от верха
                документа, расстояние от верха документа к контентному блоку, к которому ведет нажатая
                ссылка и сам контентный блок) */
                if (document.body.style.overflow !== 'hidden') { //Предотвращает прокрутку при открытом модальном окне
                    smoothScroll(scrollTop, targetElementTop, this.hash);
                }
            }
        };
    }
};
calcScroll();

let timeInterval = 1, //Задаем временной интервал в 1 миллисекунду
    prevScrollTop,
    speed;

//Функция плавной прокрутки
function smoothScroll(from, to, hash) {
    /* Если элемент (конечная точка движения) расположен ниже текущей точки экрана,
    то scroll ведется с верху вниз (положительное значение), если наоборот, то снизу
    вверх (отрицательное значение) */
    if (to > from) {
        speed = 20;
    } else {
        speed = -20;
    }
    //Установка интервала движения
    let move = setInterval(function () {
        //Получение и округение текущей позиции экрана
        scrollTop = Math.round(body.scrollTop || elements.scrollTop);
        //Условия прекращения или продолжения движения
        if (
            prevScrollTop === scrollTop ||
            (to > from && scrollTop >= to) ||
            (to < from && scrollTop <= to)
        ) {
            clearInterval(move);
            //Добавление атрибута hash в url после прокрутки (добавляется к адресной строке в браузере)
            history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') +
                hash);

        } else {
            body.scrollTop += speed;
            elements.scrollTop += speed;
            /* Передача текущей позиции экрана в переменную, которая при последующих перемещениях
            будет играть роль места хранения последней позиции экрана */
            prevScrollTop = scrollTop;
        }
    }, timeInterval); //Передача ранее установленного интервала перемещения
}