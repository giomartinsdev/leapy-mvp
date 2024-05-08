import { Request, Response } from "express";
import { runQuery } from "../utils/queryRunner";

export const addAsset = async (req: Request, res: Response) => {
  const { asset_code, description, status_code } = req.body;
  
  if (!asset_code || !description || !status_code) {
    return res.status(400).json({ error: "Dados insuficientes" });
  }

  const query: string = 'INSERT INTO assets(asset_code, description, status_code) VALUES($1, $2, $3)';

  try {
    const result = await runQuery(query, [
      asset_code,
      description,
      status_code,
    ]);

    if (!result) {
      return res.status(404).json({ error: "Ativo não encontrado" });
    }

    return res.json(`Asset ${asset_code} created`);
  } catch (error) {
    console.error("Erro ao executar consulta:", error);
    return res.status(500).json({ error: "Erro ao executar consulta" });
  }
};
