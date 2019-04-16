module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define("profile", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Profile;
};
