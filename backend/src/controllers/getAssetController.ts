import { Request, Response } from "express";
import { runQuery } from "../utils/queryRunner";

export const getAsset = async (req: Request, res: Response) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: "ID não fornecido" });
  }

  const query: string = `SELECT * FROM assets WHERE asset_code = $1`;

  try {
    const result = await runQuery(query, [id]);

    if (!result) {
      return res.status(404).json({ error: "Ativo não encontrado" });
    }

    return res.json(result);
  } catch (error) {
    console.error("Erro ao executar consulta:", error);
    return res.status(500).json({ error: "Erro ao executar consulta" });
  }
};
