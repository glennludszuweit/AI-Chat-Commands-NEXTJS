const names = [
  'Al Adnasapal',
  'Janice Garrido Ka',
  'Chloefae Cipriano',
  'Aishite Imasu',
  'Madelyn Calabria',
  'Taliang Mendoza',
  'Jaime Daguing Casil Manikan',
  'Elyn Roca',
  'Shiela Regencia Le',
  'Niofeia Grace Loreno Buenaflor',
  'Rachel Tabudlong Duran',
  'Rae Ann Estores',
  'Kiel Lakandula',
  'Jovie Valenzona-ilagan',
  'Rogelyn Abslan',
  'Dea Aiyanna',
  'Singkoy Joh',
  'Aleo Aletheia Estrera concha',
  'Ri Ca',
  'Orlyn Acebes Monton',
  'Jessa Mantua',
  'Payat Tamchai',
  'Aprilrose Lazaga Valenzuela',
  'Regin Ejon',
  'Agnes Salazar',
  'Wilmalyn Bagacay',
  'Susan Mendez Mendiola',
  'Jenny Ann Pactol Regencia',
  'Ronalyn Tidoy',
  'May Jane Flandez Meliton',
  'Degchard Mahilum',
  'Genggeng Cumayas Nedruda',
  'Darme Bodiongan Abcede Jr.',
  'Fredang Napoles Gucela',
  'Ilaine Ibañez Nayre-Cañete',
  'Violah Rose Pancito Meliton',
  'Lyka Marina Rivera',
  'Shiela Regencia Le',
  'Ivy Marie Mendiola',
  'May Jane Flandez Meliton',
  'Rachel Tabudlong Duran',
  'Francel Mae Villaber Abarquez',
  'Jessa Mantua',
  'Kiel Lakandula',
  'Jho Mirano Barrion',
  'Rogelyn Abslan',
  'Regin Ejon',
  'Anna Mahilum',
  'Ronalyn Tidoy',
  'Hezell May Comapas Pancho-Alapto',
  'Villa Concillo Granada',
  'Alcris Perero',
  'Agnes Salazar',
  'Ilaine Ibañez Nayre-Cañete',
  'Pamela Narciso',
  'Ratchel Duran',
  'Tin Tine',
  'Ethan Bodiongan',
  'Monton Gruta Rosemarie',
  'Haikedez Stacion',
  'Anna Mahilum',
  'Teresita Lontabo Bacolod',
];

function getRandomName(namesArray) {
  const randomIndex = Math.floor(Math.random() * namesArray.length);
  return namesArray[randomIndex];
}

console.log(names.length);

const selectedNames = [];

for (let i = 0; i < 15; i++) {
  let randomName;

  do {
    randomName = getRandomName(names);
  } while (selectedNames.includes(randomName));

  console.log(`Random Name ${i + 1}: ${randomName}`);
  selectedNames.push(randomName);
}
