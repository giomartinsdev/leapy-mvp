import { Request, Response } from "express";
import { runQuery } from "../utils/queryRunner";

export const updAsset = async (req: Request, res: Response) => {
  const { column, value, asset_code } = req.body;

  if (!asset_code) {
    return res.status(400).json({ error: "Insira um asset_code" });
  }
// column - value - asset_code to where
  const query: string =
    "UPDATE assets SET $2 = $3 WHERE asset_code = $4";
  try {
    const result = await runQuery(query, [column, value, asset_code]);

    if (!result) {
      return res.status(404).json({ error: "Asset não encontrado" });
    }

    return res.json(`Asset ${asset_code} removido`);
  } catch (error) {
    console.error("Erro ao executar consulta:", error);
    return res.status(500).json({ error: "Erro ao executar consulta" });
  }
};
