// products-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = "products";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      proudctName: { type: String, required: true },
      proudctBrand: { type: String, required: true },
      proudctImages: { type: Array, required: true },
      proudctCategory: { type: String, required: true },
      proudctColors: { type: Array, required: true },
      proudctSalePrice: { type: String, required: true },
      proudctCostPrice: { type: String, required: true },
      currency: { type: String, required: true },
      productDetails: { type: String, required: true },
      productRatings: { type: Number, required: true },
      productDiscount: { type: Number, required: true },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
