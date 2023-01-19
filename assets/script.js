$(document).ready(function() {
    setInterval(cal, 1)

    function cal() {
        let dpi = document.getElementById('dpi').value;
        let sensitivity = document.getElementById('sensitivity').value;
        let edpiValue = document.getElementById('edpiValue');
        let senslvl = document.getElementById('senslvl');
        let gName = document.getElementById('gName');
        let meterK = document.getElementById('meterK');
        let img1 = document.getElementById('img1');
        let img2 = document.getElementById('img2');
        let img3 = document.getElementById('img3');
        let img4 = document.getElementById('img4');
        let img5 = document.getElementById('img5');
        let img6 = document.getElementById('img6');
        let img1Name = img1.children[1].innerText;
        let img2Name = img2.children[1].innerText;
        let img3Name = img3.children[1].innerText;
        let img4Name = img4.children[1].innerText;
        let img5Name = img5.children[1].innerText;
        let img6Name = img6.children[1].innerText;
        let result = 0;
        let preValue = -90;
        let addValue = 0;
        let deg = 0;

        if (img1.classList.length == 3) {
            result = (Number(dpi) * Number(sensitivity)) / 100
            let deci = (result - Math.floor(result)) != 0;
            if (deci) {
                result = Number(Number(result).toFixed(3))
            }
        } else {
            result = Number(dpi) * Number(sensitivity)
            let deci = (result - Math.floor(result)) != 0;
            if (deci) {
                result = Number(Number(result).toFixed(3))
            }
        }
        img1.addEventListener('click', function() {
            this.classList.add('imgClickEffect')
            img2.classList.remove('imgClickEffect')
            img3.classList.remove('imgClickEffect')
            gName.innerText = img1Name
            result = Number(dpi) / Number(sensitivity)
            deci = (result - Math.floor(result)) != 0;
            if (deci) {
                result = Number(Number(result).toFixed(3))
            }
        })
        img2.addEventListener('click', function() {
            this.classList.add('imgClickEffect')
            img1.classList.remove('imgClickEffect')
            img3.classList.remove('imgClickEffect')
            img4.classList.remove('imgClickEffect')
            img5.classList.remove('imgClickEffect')
            img6.classList.remove('imgClickEffect')
            gName.innerText = img2Name

        })
        img3.addEventListener('click', function() {
            this.classList.add('imgClickEffect')
            img1.classList.remove('imgClickEffect')
            img2.classList.remove('imgClickEffect')
            img4.classList.remove('imgClickEffect')
            img5.classList.remove('imgClickEffect')
            img6.classList.remove('imgClickEffect')
            gName.innerText = img3Name
        })
        img4.addEventListener('click', function() {
            this.classList.add('imgClickEffect')
            img1.classList.remove('imgClickEffect')
            img2.classList.remove('imgClickEffect')
            img3.classList.remove('imgClickEffect')
            img5.classList.remove('imgClickEffect')
            img6.classList.remove('imgClickEffect')
            gName.innerText = img4Name
        })
        img5.addEventListener('click', function() {
            this.classList.add('imgClickEffect')
            img1.classList.remove('imgClickEffect')
            img2.classList.remove('imgClickEffect')
            img3.classList.remove('imgClickEffect')
            img4.classList.remove('imgClickEffect')
            img6.classList.remove('imgClickEffect')
            gName.innerText = img5Name
        })
        img6.addEventListener('click', function() {
            this.classList.add('imgClickEffect')
            img1.classList.remove('imgClickEffect')
            img2.classList.remove('imgClickEffect')
            img3.classList.remove('imgClickEffect')
            img4.classList.remove('imgClickEffect')
            img5.classList.remove('imgClickEffect')
            gName.innerText = img6Name
        })


        if (result != 0) {
            edpiValue.innerText = result
        } else {
            edpiValue.innerText = '-'
        }
        if (result == 0) {
            senslvl.style.color = '#fff'
            gName.style.color = '#fff'
            meterK.style.transform = `rotate(${-90}deg)`
        } else if (result <= 40) {
            senslvl.innerText = 'Low'
            senslvl.style.color = '#1d9555'
            gName.style.color = '#1d9555'
            addValue = Math.round(1.175 * result)
            deg = preValue + addValue
            meterK.style.transform = `rotate(${deg}deg)`

        } else if (result <= 80) {
            senslvl.innerText = 'Medium'
            senslvl.style.color = '#ecfd06'
            gName.style.color = '#ecfd06'
            preValue = -43
            addValue = Math.round(2.225 * (result - 40))
            deg = preValue + addValue
            meterK.style.transform = `rotate(${deg}deg)`
        } else if (result <= 100) {
            senslvl.innerText = 'High'
            senslvl.style.color = '#fd4400'
            gName.style.color = '#fd4400'
            preValue = 46
            addValue = Math.round(2.2 * (result - 80))
            deg = preValue + addValue
            meterK.style.transform = `rotate(${deg}deg)`
        } else {
            senslvl.innerText = 'High'
            senslvl.style.color = '#fd4400'
            gName.style.color = '#fd4400'
            meterK.style.transform = `rotate(${90}deg)`
        }


    }
});


