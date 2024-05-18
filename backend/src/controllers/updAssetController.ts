import { Request, Response } from "express";
import { runQuery } from "../utils/queryRunner";

export const updAsset = async (req: Request, res: Response) => {
  const { column, value, asset_code } = req.body;

  if (!asset_code) {
    return res.status(400).json({ error: "Insira um asset_code" });
  }

  const validColumns = ["status_code", "asset_code", "description"]; 
  if (!validColumns.includes(column)) {
    return res.status(400).json({ error: "Nome da coluna inválido" });
  }

  const query: string = `UPDATE assets SET ${column} = $1 WHERE asset_code = $2`;

  try {
    const result = await runQuery(query, [value, asset_code]);
    console.log(result)

    return res.json(`Ativo ${asset_code} atualizado com sucesso.`);
  } catch (error) {
    console.error("Erro ao executar consulta:", error);
    return res.status(500).json({ error: "Erro ao executar consulta" });
  }
};
