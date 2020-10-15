const operatorCode = [
  {
    name: 'beeline',
    code: ['965', '903', '905', '906', '909', '951', '953', '960', '961', '962', '963', '964', '965', '966', '967', '968']
  },
  {
    name: 'mts',
    code: ['910', '911', '912', '913', '914', '915', '916', '917', '918', '919', '980', '981', '982', '983', '984', '985', '987', '988', '989']
  },
  {
    name: 'megafon',
    code: ['920', '921', '922', '923', '924', '925', '926', '927', '928', '929']
  },
  {
    name: 'tele2',
    code: ['900', '901', '902', '904', '908', '950', '951', '952', '953', '958', '977', '991', '992', '993', '994', '995', '996', '999']
  }

]

const img = document.querySelector('.block__img');


document.querySelector('.form__button').addEventListener('click', function(event){
  event.preventDefault();
  const number = document.forms.form.elements.tel.value;
  code = number.split("").reverse().join("").substr(7,3).split("").reverse().join("");
  for (let i=0; i<operatorCode.length; i++) {
    let operator = operatorCode[i]
    for (let c=0; c<operator.code.length; c++) {
      if (operatorCode[i].code[c] === code) {
        img.className = 'block__img';
        let operatorName = operatorCode[i].name
        if (operatorName === 'beeline') {
          img.classList.add('block__img_beeline')
        } else if (operatorName === 'mts') {
          img.classList.add('block__img_mts')
        } else if (operatorName === 'megafon') {
          img.classList.add('block__img_megafon')
        } else {
          img.classList.add('block__img_tele2')
        }
      }
    }
  }
})

  

// findOperatorByNumber