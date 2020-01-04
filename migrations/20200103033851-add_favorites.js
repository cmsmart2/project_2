"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("user", "favorites", Sequelize.TEXT);
  },

  down: (queryInterface, _Sequelize) => {
    return queryInterface.removeColumn("user", "favorites");
  }
};
