// Javascript

/**
 * Fonction permettant de remplir la matrice
 * ligne: le nombre de ligne
 * colonne: le nombre de colonne
 * @returns matrice
 */
 function remplissageMatrice(ligne, colonne) {
  let matrice = [];
  let nombre = 0;
  if (ligne === 0 || colonne === 0) {
    throw new Error('Le nombre de ligne et de colonne doivent etre donnée');
  }
  for (let i = 0; i < ligne; i++) {
    matrice[i] = [];
    if (i % 2 !== 0) {
      let pointer = 0;
      do {
        console.log(i, pointer);
        nombre = nombre + 1;
        matrice[i][pointer] = nombre;
        pointer++;
      } while (pointer <= colonne);
    } else {
      let pointer = colonne;
      do {
        nombre = nombre + 1;
        matrice[i][pointer] = nombre;
        pointer--;
      } while (pointer >= 0);
    }
  }

  return matrice;
}

//remplissageMatrice(4, 5);
const form = document.querySelector('#myForm');
document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  let total = 0;

  if (Array.from(formData.values()).length !== 5) {
    document.getElementById('result').textContent =
      'Veuillez répondre à toutes les questions?';
    document.getElementById('result').style.color = 'red';
    document.getElementById('result').style.fontWeight = '400';
    return false;
  }

  for (const value of formData.values()) {
    if (
      value === 'afrique' ||
      value === 'musicien' ||
      value === 'lutteur' ||
      value === 'usa' ||
      value === 'chanteur'
    ) {
      total += 20;
    }
  }

  const result = document.querySelector('.result');

  result.textContent = 'Votre résultat est ' + total + '%';

  const resetButton = document.createElement('button');
  resetButton.type = 'reset';
  resetButton.textContent = 'Reinitialiser';
  resetButton.style.color = '#fff';
  resetButton.style.marginLeft = '1rem';
  resetButton.style.backgroundColor = '#ff4032';

  resetButton.addEventListener(
    'click',
    function (e) {
      e.preventDefault();
      document.querySelector('form').reset();
      result.textContent = '';
      this.remove();
    },
    { once: true }
  );

  document.querySelector('button[type=submit]').after(resetButton);
});
  