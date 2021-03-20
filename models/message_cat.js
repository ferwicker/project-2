module.exports = (sequelize, DataTypes) => {
  const Message_Cat = sequelize.define(
    "message_cat",
    {
      cat_desc: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    },
    {
      freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
    }
  );

  // // force: true will drop the table if it already exists
  // Message_Cat.sync({ force: true });
  //   // Table created

  return Message_Cat;
};
