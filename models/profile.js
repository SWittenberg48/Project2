module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define("profile", {
    firebase_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    event: {
      type: DataTypes.STRING,
      allowNull: true
    },
    restaurant: {
      type: DataTypes.STRING,
      allowNull: true
    },
    landmark: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Profile;
};
