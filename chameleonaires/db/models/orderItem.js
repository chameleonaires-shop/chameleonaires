// grab our db client connection to use with our adapters
const client = require("../client");

module.exports = {
  // add your database adapter fns here
  createOrderItem,
  destroyOrderItem,
  updateOrderItem,
};
async function getOrderItemById(id) {
  try {
    const { row } = await client.query(`SELECT * FROM order_item WHERE id=$1`, [
      id,
    ]
    );
    return row;
  } catch (error) {
    throw error;
  }
}
async function createOrderItem(orderId, productId, price, quantity) {
  try {
    const {
      rows: [orderItem],
    } = await client.query(
      `
    INSERT INTO order_item("orderId","productId", price,quantity)
    VALUES($1,$2,$3,$4)
    ON CONFLICT ("orderId", "productId") DO NOTHING
    RETURNING *
    `,
      [orderId, productId, price, quantity]
    );
  } catch (error) {
    throw error;
  }
}
async function updateOrderItem({ id, price, quantity }) {
  try {
    let temp=getOrderItemById(id);
    price=price?price:temp.price;
    quantity=quantity?quantity:temp.quantity;
    const {row}=await client.query(`
    UPDATE order_item
    SET price=$1, quantity=$2
    WHERE id=$3`,[price,quantity,id])
    return row;
  } catch (error) {
    throw error;
  }
}
async function destroyOrderItem(id) {
  try {
    const {
      row: [deleted],
    } = await client.query(
      `
    DELETE FROM order_item
    WHERE id=$1`,
      [id]
    );
    return deleted;
  } catch (error) {
    throw error;
  }
}
