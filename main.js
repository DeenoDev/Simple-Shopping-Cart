
function totalprix() {
    let XXX = ((document.getElementById('mousevalue').value * 39) + (document.getElementById('claviervalue').value * 47) + (document.getElementById('casquevalue').value * 125))
    let elm = document.getElementById('panier')
    elm.innerHTML = XXX
}

function moinProduit(Y) {
    let selecteur = 'li:nth-child(' + Y + ') div div:nth-child(4) form input:nth-child(2)'
    let elm = document.querySelector(selecteur)
    if (elm.value > 0)
        elm.value -= 1
    totalprix()
}

function addProduit(Y) {
    let selecteur = 'li:nth-child(' + Y + ') div div:nth-child(4) form input:nth-child(2)'
    let elm = document.querySelector(selecteur)
    elm.value = parseInt(elm.value) + 1
    totalprix()
}

function delete1(Y) {
    let YY = 0
    let deletevalue = 'li:nth-child(' + Y + ') div div:nth-child(4) form input:nth-child(2)'
    if (YY = 0) {
        let selector = 'li:nth-child(' + Y + ')'

        document.querySelector(selector).style.display = 'none'
        YY++
        document.querySelector(deletevalue).value = 0

    }
    else {
        Y -= YY
        let selector = 'li:nth-child(' + Y + ')'
        document.querySelector(selector).style.display = 'none'
        document.querySelector(deletevalue).value = 0
        YY++
    }

    totalprix()

}


function red(Y) {
    let selector = 'ul li:nth-child(' + Y + ') div div i'
    document.querySelector(selector).style.color = 'red'
}


