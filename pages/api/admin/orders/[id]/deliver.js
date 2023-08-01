import { getToken } from 'next-auth/jwt';
import Order from '../../../../../models/Order';
import db from '../../../../../utils/db';
import Product from '../../../../../models/Product';

const handler = async (req, res) => {
  const user = await getToken({ req });
  if (!user || (user && !user.isAdmin)) {
    return res.status(401).send('Error: signin required');
  }
  await db.connect();
  const order = await Order.findById(req.query.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    const deliveredOrder = await order.save();
    for (const item of order.orderItems) {
      const product = await Product.findById(item.id);
      const index = order.orderItems.indexOf(item);
      product.countInStock =
        product.countInStock - order.orderItems[index].quantity;
      await product.save();
    }
    await db.disconnect();
    res.send({
      message: 'order delivered successfully',
      order: deliveredOrder,
    });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Error: order not found' });
  }
};

export default handler;

