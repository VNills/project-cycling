module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Points', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      trackId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Tracks',
          key: 'id',
        },
      },
      latitude: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      longitude: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Points');
  },
};
