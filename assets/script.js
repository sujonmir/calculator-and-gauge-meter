$(document).ready(function() {
    setInterval(cal, 1)

    function cal() {
        let dpi = document.getElementById('dpi').value;
        let sensitivity = document.getElementById('sensitivity').value;
        let edpiValue = document.getElementById('edpiValue');
        let senslvl = document.getElementById('senslvl');
        let gName = document.getElementById('gName');
        let meterK = document.getElementById('meterK');
        let result = 0;
        let preValue = -90;
        let addValue = 0;
        let deg = 0;


        result = Number(dpi) * Number(sensitivity)
        if (result !== 0) {
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
            preValue= -43
            addValue = Math.round(2.225 * (result-40))
            deg = preValue + addValue
            meterK.style.transform = `rotate(${deg}deg)`
        } else if (result <= 100) {
            senslvl.innerText = 'High'
            senslvl.style.color = '#fd4400'
            gName.style.color = '#fd4400'
            preValue= 46
            addValue = Math.round(2.2 * (result-80))
            deg = preValue + addValue
            meterK.style.transform = `rotate(${deg}deg)`
        }else{
            senslvl.innerText = 'High'
            senslvl.style.color = '#fd4400'
            gName.style.color = '#fd4400'
            meterK.style.transform = `rotate(${90}deg)`
        }

    }
});