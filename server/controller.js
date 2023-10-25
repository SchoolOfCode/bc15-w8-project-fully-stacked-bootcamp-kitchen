import * as model from "../server/model.js";

export async function getDishes(req, res) {
  const dishes = await model.getDishes();
  res.status(200).json({ status: "success", data: dishes });
}

export async function getDishesByTag(req, res) {
  const id = req.params.tags;
  const dishes = await model.getDishesByTag(tags);
  // Assume 404 status if the dish is not found
  if (!dishes) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Dish not found" } });
  }
  res.status(200).json({ status: "success", data: dishes });
}
