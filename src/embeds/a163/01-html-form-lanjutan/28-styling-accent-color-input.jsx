import React from 'react';
import StaticWebSandpack from '../../../components/sandpacks/StaticWebSandpack';

const files = {
  'index.html': {
    hidden: false,
    active: true,
    code: `\
<!DOCTYPE html>
<html lang="id">
  <head>
    <title>Accent Color Styling</title>

    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <main>
      <h1>Pesan Salad? Ya di SaladinAja</h1>

      <form>
        <div class="form-group">
          <label for="name">Nama</label>
          <div class="text-wrapper">
            <input type="text" name="name" id="name" required minlength="2" />
          </div>
        </div>
        <div class="form-group">
          <label for="fruitType">Pilih buah</label>
          <div class="select-wrapper">
            <select id="fruitType" name="fruitType" required>
              <option value="" disabled selected>Pilih salah satu</option>
              <option>Mangga</option>
              <option>Pisang</option>
              <option>Ceri</option>
              <option>Apel</option>
              <option>Stroberi</option>
              <option>Jeruk</option>
            </select>
          </div>
        </div>
        <fieldset>
          <legend>Toppings</legend>
          <div class="form-group">
            <input type="checkbox" id="yogurt" name="toppings" />
            <label for="yogurt">Yogurt</label>
          </div>
          <div class="form-group">
            <input type="checkbox" id="condensedMilk" name="toppings" />
            <label for="condensedMilk">Kental Manis</label>
          </div>
          <div class="form-group">
            <input type="checkbox" id="cheese" name="toppings" />
            <label for="cheese">Keju</label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Makan ditempat atau bawa pergi</legend>
          <div class="form-group">
            <input type="radio" id="dineIn" name="isDineIn" required />
            <label for="dineIn">Makan di tempat</label>
          </div>
          <div class="form-group">
            <input type="radio" id="takeAway" name="isDineIn" required />
            <label for="takeAway">Bawa pergi</label>
          </div>
        </fieldset>
        <div class="form-group">
          <label for="size">Ukuran</label>
          <div class="range-wrapper">
            <input
              type="range"
              id="size"
              value="2"
              min="1"
              max="3"
              required
              list="sizeList"
              oninput="
                nextElementSibling.value =
                  this.value == 1 ? 'Kecil' : 
                  this.value == 2 ? 'Sedang' : 'Besar'
              "
            />
            <output id="sizeOutput">Sedang</output>
            <datalist id="sizeList">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </datalist>
          </div>
        </div>

        <div class="form-group">
          <button>Beli!</button>
        </div>
      </form>
    </main>
  </body>
</html>
`,
  },
  'main.css': {
    hidden: false,
    code: `\
input[type='radio'],
input[type='checkbox'],
input[type='range'] {
  accent-color: salmon;
}
`,
  },
};

function StylingAccentColorInput28() {
  return (
    <StaticWebSandpack files={files} />
  );
}

export default StylingAccentColorInput28;
