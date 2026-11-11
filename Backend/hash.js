const bcrypt = require('bcrypt');

async function generateHash() {
    const password = "Kaushal@2004";
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);
}

generateHash();