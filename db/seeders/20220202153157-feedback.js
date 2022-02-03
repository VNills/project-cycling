module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Feedbacks', [{
      userId: 1,
      trackId: 1,
      rating: 5,
      body: 'Свежий воздух, красивая уникальная природа, флора и фауна. ',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      trackId: 2,
      rating: 4,
      body: 'Где еще можно найти красивую прибрежную велосипедную дорожку с дружелюбными магазинами проката велосипедов по пути, не говоря уже о кафе и ресторанах по пути. Должно быть 5 звезд.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 3,
      trackId: 3,
      rating: 3,
      body: 'Поедем красотка катааааааться... Отзыв для души. Обожаю велосипед, хорошо прокатился, Кайф',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 4,
      trackId: 4,
      rating: 5,
      body: 'Внезапные знакомства, подтянутое тело, а так же куча синяков и шрамы на руке на всю жизнь... Велоспорт - моя жизнь.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 5,
      trackId: 5,
      rating: 5,
      body: 'Минус 1 килограмм за одну поездку на велосипеде? Да запросто!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 6,
      trackId: 6,
      rating: 5,
      body: 'Велопрогулка очень понравилась. Погода была пасмурной, но всё равно пейзажи красивые.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 7,
      trackId: 7,
      rating: 5,
      body: `Уникальная  велосипедная трасса вдоль морского побережья достойна того чтобы раздобыть велосипед и прокатиться, даже если вы не очень-то хорошо это умеете (как я :). Вы едете вдоль садов, благоухающих цветами, вдоль парков, вилл, церквей, поднимаетесь в горочки и спускаетесь в низины, проезжаете через туннели в скалах, и почти везде вас сопровождают меняющиеся красивые виды на море.
       Можно с комфортом и наслаждением посетить несколько прибрежных городков, искупаться там где захочется, сделать красивые фотографии.`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 8,
      trackId: 8,
      rating: 5,
      body: 'Отличная трасса для качественных велотренировок! На вершине открывается отличный вид на город! В некоторых местах трассу не помешало бы подлатать. Огорчает, что люди ходят по трассе не понимая, что подвергают себя и своих детей опасности.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 9,
      trackId: 9,
      rating: 5,
      body: 'Лучшее место для тренировки на шоссейном велосипеде. Хорошая трасса, интересный рельеф. Много сильных велосипедистов.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 10,
      trackId: 10,
      rating: 5,
      body: 'Очень крутое место, с красивыми видами, крутыми горками (65 км/ч на мтб).',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Feedbacks', null, {});
  },
};
