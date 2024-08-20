module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        wins: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        losses: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
    return Users;
};