let calculation = localStorage.getItem('calculation') || '';

      Calculations();

      function updateCalculation(value) {
        calculation += value;
        Calculations();
        localStorage.setItem('calculation', calculation);
      }

      function Calculations() {
        document.querySelector('.js-score').innerHTML = `${calculation}`
      };