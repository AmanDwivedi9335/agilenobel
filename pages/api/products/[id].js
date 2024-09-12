import db from '../../../models';

const handler = async (req, res) => {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { name, description, price, imageUrl } = req.body;
    const product = await db.Product.findByPk(id);
    await product.update({ name, description, price, imageUrl });
    res.status(200).json(product);
  } else {
    const product = await db.Product.findByPk(id);
    res.status(200).json(product);
  }
};

export default handler;npm 
