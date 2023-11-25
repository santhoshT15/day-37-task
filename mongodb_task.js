// Find all the information about each products

    db.products.find();

// Find the product price which are between 400 to 800

    db.products.find({product_price:{"$gte":400,"$lte":800}})

// Find the product price which are not between 400 to 600

    db.products.find({product_price:{"$not":{"$gte":400,"$lte":600}}})

// List the four product which are grater than 500 in price 

    db.products.find({product_price:{"$gte":500}})

    admin> db.products.find({product_price:{"$gte":500}})
[
  {
    _id: ObjectId("651128f2efec693f26c0f86e"),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId("651128f2efec693f26c0f86f"),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId("651128f2efec693f26c0f870"),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId("651128f2efec693f26c0f874"),
    id: '7',
    product_name: 'Practical Soft Shoes',
    product_price: 500,
    product_material: 'Rubber',
    product_color: 'pink'
  }
]

// Find the product name and product material of each products

    db.products.find({_id:0, product_name: 1, product_price: 1});
    
// Find the product with a row id of 10

  db.products.find({ id: "10"});

// Find only the product name and product material

db.products.find({ id: "10" }, { product_name: 1, product_material: 1, _id: 0 });

// Find all products which contain the value of soft in product material 

db.products.find({ product_material: "Soft" });

// Find products which contain product color indigo  and product price 492.00

db.products.find({ product_price: 492, product_color: "indigo" });

// Delete the products which product price value are same

db.products
    .aggregate([
        { $group: { _id: "$product_price", count: { $sum: 1 } } },
        { $match: { count: { $gt: 1 } } },
    ])
    .forEach((doc) => {
        db.products.remove({ product_price: doc._id });
    });
