module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        url: String,
        logo: String,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Magasin = mongoose.model("magasin", schema);
    return Magasin;
  };
  