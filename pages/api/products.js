import db from '../../models';

export default async function handler(req, res) {
  console.log('DB Object:', db); // Log the db object to inspect it
  console.log('Product Model:', db.Product); // Log the Product model to ensure it's defined

  if (req.method === 'POST') {
    try {
      const { name, description, price, imageUrl } = req.body;

      if (!name || !description || !price || !imageUrl) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Create the product
      const product = await db.Product.create({
        name,
        description,
        price,
        imageUrl,
      });

      res.status(201).json(product);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Failed to create product', details: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const products = await db.Product.findAll();
      res.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Failed to fetch products', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
