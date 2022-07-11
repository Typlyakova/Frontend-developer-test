
$(document).ready(function (e) {
    let count = 0
    var elementCard = {}
    const cards = [
        {
            'id': 0,
            'img': 'img/Rectangle 31.png',
            'name': 'Баименование',
            'desc': 'Довольно-таки интересное описание товара в несколько строк. Довольно-такиинтересное описание товара в'
                + 'несколько строк',
            'price': '10 000 руб.'
        },
        {
            'id': 1,
            'img': 'img/Rectangle 31.png',
            'name': 'Фаименование',
            'desc': 'Довольно-таки интересное описание товара в несколько строк. Довольно-такиинтересное описание товара в'
                + 'несколько строк',
            'price': '11 000 руб.'
        },
        {
            'id': 2,
            'img': 'img/Rectangle 31.png',
            'name': 'Ааименование',
            'desc': 'Довольно-таки интересное описание товара в несколько строк. Довольно-такиинтересное описание товара в'
                + 'несколько строк',
            'price': '12 000 руб.'
        },
    ]

    let gridCont = document.getElementById('cardsPlace')
    var cardItem = ''
    updateCards()
    function updateCards() {
        cards.forEach(item => {
            cardItem +=
                `<div  class="grid_item">\
                <img src="${item.img}" alt="" class="logo_img">\
                <img id="${item.id}" src="./img/Group 25.svg" alt="" class="del">\
                <div class="texting_info">\
                    <div class="info_text">\
                        <span>${item.name}</span>\
                        <p>${item.desc}</p>\
                    </div>\
                    <div class="pain">\
                        <span>${item.price}</span>\
                    </div>\
                </div>\
            </div>`
        })
        gridCont.insertAdjacentHTML('afterbegin', cardItem);

    }
    function addCard() {
        cardItem +=
            `<div  class="grid_item">\
                                <img src="${elementCard.img}" alt="" class="logo_img">\
                                <img id="${elementCard.id}" src="./img/Group 25.svg" alt="" class="del">\
                                <div class="texting_info">\
                                    <div class="info_text">\
                                        <span>${elementCard.name}</span>\
                                        <p>${elementCard.desc}</p>\
                                    </div>\
                                    <div class="pain">\
                                        <span>${elementCard.price}</span>\
                                    </div>\
                                </div>\
                            </div>`

        gridCont.insertAdjacentHTML('afterbegin', cardItem);
    }



    // $('#btn-add').prop("disabled", true);
    $('#btn-add').click(function (e) {
        e.preventDefault();
        $('.form_input').each(function (item, index, array) {
            if ($(this).val() == '' && item !== 1) {
                $(this).addClass('form_input_err');
                $('#err' + item).text("Поле является обязательным!")
            }
        })
        if ($('#input1').val().length >= 1 && $('#input2').val().length >= 1 && $('#input3').val().length >= 1) {
            elementCard.name = $('#input1').val()
            elementCard.desc = $('#input4').val()
            elementCard.img = $('#input2').val()
            elementCard.price = $('#input3').val() + " руб."
            cards.push(elementCard)
            const m = document.getElementById('cardsPlace')
            m.textContent = ''
            count = 0
            // gridCont.insertAdjacentHTML('afterbegin', cardItem)
            addCard()
            $('#input1').val('')
            $('#input2').val('')
            $('#input3').val('')
            $('#input4').val('')
            $('#btn-add').prop("disabled", false)
            $('#btn-add').removeClass('general-btn-active')
        }
    })
    $('.form_input').each(function (item, index, array) {
        if (item == 1) {
            return
        }
        $(index).change(function () {
            if (item == 1) {
                return
            }
            $(index).removeClass('form_input_err');
            $('#err' + item).text('')
            count++;
            if (count == 3) {
                $('#btn-add').prop("disabled", false)
                $('#btn-add').addClass('general-btn-active')
            }
        })
    })

    $('#selectvalue').change(function () {
        const m = document.getElementById('cardsPlace')
        while (m.firstChild) {
            m.removeChild(m.firstChild)
        }
        switch ($(this).val()) {
            case 'max':
                cardItem = ''
                cards.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                updateCards()
                break;
            case 'min':
                cardItem = ''
                cards.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                updateCards()
                break;
            case 'namesUp':
                cardItem = ''
                cards.sort(function (a, b) {
                    if (b.name < a.name) {
                        return -1;
                    }
                })
                updateCards()
                break;
            case 'names':
                cardItem = ''
                cards.sort(function (a, b) {
                    if (b.name > a.name) {
                        return -1;
                    }
                })
                updateCards()
                break;
            default:
                break;
        }
    })
    $('.del').click(function (e) {
        const m = document.getElementById('cardsPlace')
        while (m.firstChild) {
            m.removeChild(m.firstChild)
        }
        cardItem = ''
        console.log(i);
        cards.splice(i, 1)


        updateCards()
    })
})

