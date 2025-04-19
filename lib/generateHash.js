const bcrypt = require('bcrypt');

async function generateHash() {
  try {
    const plainPassword = '1234';
    const saltRounds = 10;
    const hash = await bcrypt.hash(plainPassword, saltRounds);
    console.log('Password in chiaro:', plainPassword);
    console.log('Hash generato:', hash);
  } catch (error) {
    console.error('Errore nella generazione dell\'hash:', error);
  }
}

generateHash();
