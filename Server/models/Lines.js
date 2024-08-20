module.exports = (sequelize, DataTypes) => {
    const Lines = sequelize.define("Lines", {
        condition: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        text: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
    return Lines;
};