document.getElementById('poleVvode').setAttribute('autocomplete', 'off')
let text = document.getElementById('text')
let input = document.getElementById('poleVvode')
var textDefault = document.getElementById("text").innerText
let result = document.getElementById('result')
let wpmDiv = document.getElementById('WPM')
let cpmDiv = document.getElementById('CPM')
let divTime = document.getElementById('curTime')
let time = document.getElementById('time')
let resultWPM = document.querySelector('.result')
let wpmBlock = document.getElementById('wpm-result')
let cpmBlock = document.getElementById('cpm-result')
let timeBlock = document.getElementById('time-result')
let engText = 'man out other so what time just begin while number part turn real leave might want point in english form off child few small since against ask late home city put close case force meet once water upon war though young less enough almost read include president nothing yet simple within love human along appear doctor believe speak active interest large person end open public follow during present without build hear light unite live every country bring center let better big boy cost business value second why clear expect student month drive concern best door hope example inform body again hold govern around possible head consider word program problem side try provide continue name certain power pay result question family complete act sense mind experience art next near direct ever least probable understand reach effect different idea whole control however lead system set order eye plan run keep face study woman member until far night always service away report car law industry important girl god several matter usual rather condition field pass fall note special talk particular today measure fact group play stand increase early course change help line something company week church toward start social room figure nature per often kind among white reason action return foot care walk teach low hour type carry rate remain full street in paradise easy although purpose test fight watch situation south outside moment spirit train college religion perhaps music grow free cause manage answer break organize half fire lose money stop actual ago difference stage father table rest bear entire market prepare serve age book board recent sound office cut step class already effort wait department able political learn voice air together explain offer plant charge ground west picture hard front lie true history position above strong friend necessary add court deal shall cover common subject draw short wife treat limit road modern dark surface rule regard dance peace observe future wall tax support party whether either land material happen education death letter color behind produce send term total university rise century farm claim firm operation further pressure property morning amount top'
let rusText = 'над взять никто сделать дверь перед нужный понимать казаться работа три ваш уж земля конец несколько час голос город последний пока хорошо давать вода более хотя всегда второй куда пойти стол ребенок увидеть сила отец женщина машина случай ночь сразу мир совсем остаться обруч вид выйти дать работать любить старый почти ряд оказаться начало твой вопрос много война снова ответить между подумать опять белый деньги значить про лишь минута жена посмотреть правда главный страна свет ждать мать будто никогда товарищ дорога однако лежать именно окно никакой найти писать комната число часть вообще книга маленький улица решить далекий душа чуть вернуться утро некоторый считать сколько помнить вечер вечер пол таки получить народ плечо хоть сегодня бог вместе взгляд ходить зачем советский русский бывать полный прийти палец Россия любой история наконец мысль узнать назад общий заметить словно прошлый уйти известный давно слышать слушать бояться сын нельзя прямо долго быстро лес похожий пора пять глядеть оно сесть имя живот разговор тело молодой стена красный читать право старик ранний хотеться мама оставаться высокий путь поэтому совершенно кроме тысяча месяц брать написать целый огромный начинать спина настоящий пусть язык точно среди чувствовать сердце вести иногда мальчик успеть небо живой смерть продолжать девушка образ корм забыть вокруг письмо власть черный пройти появиться воздух разный выходить просить брат собственный отношение затем пытаться показать вспомнить система четыре квартира держать также любовь солдат откуда чтоб называть третий хозяин вроде уходить подойти поднять особенно спрашивать начальник оба бросить школа парень кровь двадцать солнце неделя послать находиться ребята поставить встать например шаг мужчина равно нос мало внимание капитан ухо туда сюда играть следовать рассказать великий действительно слишком тяжелый спать оставить войти длинный чувство молчать рассказывать отвечать становиться остановиться берег семья искать искать генерал момент десять начать следующий личный труд верить группа немного впрочем видно являться муж разве движение порядок ответ тихо знакомый газета помощь сильный скорый собака дерево снег сон смысл смочь против бежать двор форма простой приехать иной кричать возможность общество зеленый грудь угол открыть происходить ладно черный век карман ехать немец наверное губа дядя приходить часто домой огонь писатель армия состояние зуб очередь кой подняться камень гость показаться ветер'
let oldWords = []
let NowArr = []
let arrWords = []
let inputTime = 60
let inputWords = 250
let topCoor = 374
if (window.innerWidth <= 700) {
    topCoor = 374
}
let idName = 0
let TochkaOtsheta = 1
let i = 0
let start = 0
let quanSymb = 0
let zapusk = 0
let drugoiZapusk = 0
let nom = 0
let currentWordText = 0
let currTime = inputTime
let wpm, timerFunc, interFunc, wordCoor

engText = engText.split(' ')
rusText = rusText.split(' ')

function changeWord() {
    document.getElementById(`${idName}`).style.borderBottom = '2px solid var(--txtMainColor)'
    // document.getElementById(`${idName}`).style.setProperty('--bottomColor', 'var(--txtMainColor)')
}

function randomArr(array) {
    array.sort(() => Math.random() - 0.5)

    for (let a = 0; a < inputWords; a++) {
        NowArr.push(array[a]);
    }

    for (let i = 0; i < NowArr.length - 1; i++) {
        let word = document.createElement('span')
        word.innerHTML = `<span id=${i}>${NowArr[i]}</span> `
        text.innerHTML += word.innerHTML
    }
}

randomArr(engText);

function filter() {
    inputTime = document.getElementById('time').value
    currTime = 0
    restart()

    if (inputTime == '') {
        inputTime = 30;
    }

    if (inputTime > 180) {
        inputTime = 180
        document.getElementById('time').value = 180
    } else if (inputTime < 30) {
        inputTime = 30
        document.getElementById('time').value = 30
    }
}

input.addEventListener('input', poleVvode)

changeWord()

function poleVvode() {

    if (start == 0) {
        zapusk = 0
        zapusk++
        timer()
        currentTime()
    }

    input.value = input.value.replace('  ', '')

    wordCurrent = document.getElementById(idName)
    start++

    // ArraySymbols = wordCurrent.innerText.split('')
    // console.log(ArraySymbols)

    // if (currentWordText != wordCurrent.innerText) {
    //     wordCurrent.innerHTML = ''
    //     for (let i = 0; i < ArraySymbols.length; i++) {
    //         let symbol = document.createElement('span')
    //         symbol.innerHTML = `<span id=${i + '000'}>${ArraySymbols[i]}</span>`
    //         wordCurrent.innerHTML += symbol.innerHTML
    //     }
    // }
    // currentWordText = wordCurrent.innerText

    // if (input.value[input.value.length - 1] == ArraySymbols[input.value.length - 1]) {
    //     // document.getElementById(`${input.value.length-1}+'000'`).style.opacity = '0.3'
    //     console.log(document.getElementById(`${input.value.length - 1}+'000'`))
    // }

    if (input.value.slice(0, input.value.length) != wordCurrent.innerText.slice(0, input.value.length)) {
        document.getElementById(`${idName}`).style.color = '#d92139'
        document.getElementById(`${idName}`).style.borderBottom = '2px solid #d92139'
        // document.getElementById(`${idName}`).style.setProperty('--bottomColor', 'red')

    } else {
        changeWord()  
        document.getElementById(`${idName}`).style.color = 'var(--txtMainColor)'
        document.getElementById(`${idName}`).style.borderBottom = '2px solid var(--txtMainColor)'
    }

    if (input.value[input.value.length - 1] == ' ' && input.value.length > 1) {
        document.getElementById(`${idName}`).style.borderBottom = '2px solid  var(--bgBodyColor)'
        // document.getElementById(`${idName}`).style.setProperty('--bottomColor', 'transperet')

        if (input.value.toLowerCase() != wordCurrent.innerText + ' ') {
            wordCurrent.style.textDecoration = 'line-through #d92139'
            wordCurrent.style.textDecorationThickness = '3px'
            nom++
        }
        else {
            arrWords.push(NowArr[idName])
        }

        wordCurrent.style.opacity = '0.4'

        input.value = ''
        wordCoor = document.getElementById(`${idName}`).getBoundingClientRect()
        document.getElementById(`${idName}`).style.color = 'var(--txtMainColor)'
        i++
        idName++

        changeWord()

        if (window.innerWidth <= 700) {
            if (document.getElementById(`${TochkaOtsheta}`).getBoundingClientRect().top < wordCoor.top - 100) {
                TochkaOtsheta = wordCurrent.id
                text.scrollTo({ top: document.getElementById(`${idName - 1}`).getBoundingClientRect().top - topCoor, behavior: 'smooth' })
                topCoor -= 103
            }
        } else {
            if (document.getElementById(`${TochkaOtsheta}`).getBoundingClientRect().top < wordCoor.top - 27) {
                TochkaOtsheta = wordCurrent.id
                text.scrollTo({ top: document.getElementById(`${idName - 1}`).getBoundingClientRect().top - topCoor, behavior: 'smooth' })
                topCoor -= 54
            }
        }

        // for (let i = 0; i < ArraySymbols.length; i++) {
        //     // document.getElementById('0000').outerHTML = ''
        // }
        // ArraySymbols = []

    }
}

function currentTime() {
    if (input.value != '' && zapusk == 1) {
        currTime = inputTime
        divTime.innerText = currTime
        interFunc = setInterval(() => {
            currTime -= 1
            divTime.innerText = currTime
            if (currTime <= 0) {
                clearInterval(interFunc)
                divTime.style.color = 'var(--txtMainColor)'
                divTime.innerHTML = '-- <span class="tooltiptext">time</span>'
            }
        }, 1000);
    }
}

function timer() {
    if (input.value != '' && zapusk == 1) {
        timerFunc = setTimeout(() => {
            input.value = ''
            input.setAttribute('disabled', 'disabled')
            input.setAttribute('placeholder', 'time is over!')
            wpm = Math.round(arrWords.length / (inputTime / 60))

            for (c = 0; c < arrWords.length; c++) {
                quanSymb += arrWords[c].length
            }

            resultWPM.style.display = 'flex'
            resultWPM.classList.remove('guideAnimOutro')
            resultWPM.classList.add('guideAnimIntro')
            wpmBlock.innerText = `${wpm}`
            cpmBlock.innerText = `${quanSymb / (inputTime / 60)}`
            timeBlock.innerText = `${nom}`

        }, inputTime * 1000);
    }
}

function restart() {
    input.value = ''
    text.innerHTML = ''
    NowArr = []
    oldWords = []
    arrWords = []

    currTime = 0;
    start = 0
    zapusk = 0
    i = 0
    quanSymb = 0
    TochkaOtsheta = 1
    idName = 0
    topCoor = 374
    nom = 0

    input.setAttribute('placeholder', 'write there')
    input.removeAttribute('disabled')

    resultWPM.classList.remove('guideAnimIntro')
    resultWPM.classList.add('guideAnimOutro')
    clearTimeout(timerFunc)
    clearInterval(interFunc)
    divTime.innerHTML = '-- <span class="tooltiptext">time</span>'

    text.scrollTo({ top: 0 })

    if (window.innerWidth <= 700) {
        topCoor = 324
    }

    if (document.getElementById('rus').checked == true) {
        randomArr(rusText)
    } else {
        randomArr(engText)
    }

    changeWord()
}