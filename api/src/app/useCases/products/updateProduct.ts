import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function updateProduct(req: Request, res: Response) {
  try {
    const { productId } = req.params;
    const imagePath = req.file?.filename;
    const { name, description, price, ingredients } = req.body;

    await Product.findByIdAndUpdate(productId, {
      name,
      description,
      imagePath,
      price,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500);
  }
}
