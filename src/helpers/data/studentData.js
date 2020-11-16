const students = [
  {
    id: '1',
    firstName: 'Autumn',
    lastName: 'Fotopoulos',
    image: 'https://avatars3.githubusercontent.com/u/67810121?v=4',
    isDead: false,
  },
  {
    id: '2',
    firstName: 'Bailey',
    lastName: 'Dennis',
    image: 'https://avatars0.githubusercontent.com/u/29682262?v=4',
    isDead: false,
  },
  {
    id: '3',
    firstName: 'Chris',
    lastName: 'LoJacono',
    image: 'https://avatars2.githubusercontent.com/u/66916708?v=4',
    isDead: false,
  },
  {
    id: '4',
    firstName: 'Chris',
    lastName: 'Calhoun',
    image: 'https://avatars1.githubusercontent.com/u/42413958?v=4',
    isDead: false,
  },
  {
    id: '5',
    firstName: 'Dana',
    lastName: 'Pham',
    image: 'https://avatars2.githubusercontent.com/u/67748110?v=4',
    isDead: false,
  },
  {
    id: '6',
    firstName: 'Deanna',
    lastName: 'Mix',
    image: 'https://avatars1.githubusercontent.com/u/67847120?v=4',
    isDead: false,
  },
  {
    id: '7',
    firstName: 'Hunter',
    lastName: 'Juneau',
    image: 'https://avatars2.githubusercontent.com/u/20494604?v=4',
    isDead: false,
  },
  {
    id: '8',
    firstName: 'Jonathon',
    lastName: 'Joyner',
    image: 'https://avatars0.githubusercontent.com/u/67886630?v=4',
    isDead: false,
  },
  {
    id: '9',
    firstName: 'Jordan',
    lastName: 'Smith',
    image: 'https://avatars2.githubusercontent.com/u/67443077?v=4',
    isDead: false,
  },
  {
    id: '10',
    firstName: 'Joseph',
    lastName: 'Martin',
    image: 'https://avatars3.githubusercontent.com/u/41244241?v=4',
    isDead: false,
  },
  {
    id: '11',
    firstName: 'Kaitlyn',
    lastName: 'VanHook',
    image: 'https://avatars3.githubusercontent.com/u/63985074?v=4',
    isDead: false,
  },
  {
    id: '12',
    firstName: 'Liz',
    lastName: 'Barnes',
    image: 'https://avatars2.githubusercontent.com/u/65733608?v=4',
    isDead: false,
  },
  {
    id: '13',
    firstName: 'Michael',
    lastName: 'Pfohl',
    image: 'https://avatars2.githubusercontent.com/u/61816911?v=4',
    isDead: false,
  },
  {
    id: '14',
    firstName: 'Robert',
    lastName: 'Bandstra',
    image: 'https://avatars2.githubusercontent.com/u/67298516?v=4',
    isDead: false,
  },
  {
    id: '15',
    firstName: 'Ryan',
    lastName: 'McNair',
    image: 'https://avatars2.githubusercontent.com/u/67588177?v=4',
    isDead: false,
  },
  {
    id: '16',
    firstName: 'Sam',
    lastName: 'Mudick',
    image: 'https://avatars0.githubusercontent.com/u/65687019?v=4',
    isDead: false,
  },
  {
    id: '17',
    firstName: 'Summer',
    lastName: 'Duke',
    image: 'https://avatars2.githubusercontent.com/u/60371978?v=4',
    isDead: false,
  },
  {
    id: '18',
    firstName: 'Wanda',
    lastName: 'McInturff',
    image: 'https://avatars0.githubusercontent.com/u/67842770?v=4',
    isDead: false,
  },
  {
    id: '19',
    firstName: 'Wendell',
    lastName: 'Patton Jr.',
    image: 'https://avatars0.githubusercontent.com/u/63669713?v=4',
    isDead: false,
  },
  {
    id: '20',
    firstName: 'Will',
    lastName: 'Kotheimer',
    image: 'https://avatars3.githubusercontent.com/u/5234281?v=4',
    isDead: false,
  },
];

const livingStudents = () => {
  const liveStudents = students.filter((student) => student.isDead === false);
  console.warn('liveStudents', liveStudents);
  return liveStudents;
};

const dearlyBeloved = () => {
  const belovedStudents = students.filter((student) => student.isDead === true);
  console.warn('belovedStudents', belovedStudents);
  return belovedStudents;
};

const followTheLight = (id) => {
  const attackedStudent = students.find((student) => id === student.id);
  attackedStudent.isDead = true;
  attackedStudent.image = 'https://anytimecostumes-weblinc.netdna-ssl.com/product_images/mossy-bat-rip-gravestone/577c177769702d1e83000245/original.jpg?c=1467750263';
  console.warn('followthelight', attackedStudent.isDead);
};

export { livingStudents, dearlyBeloved, followTheLight };
