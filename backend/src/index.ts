import express from "express";
import cors from "cors";
import rootRouter from "./routes/rootRouter"; 
import getAssetRouter from "./routes/getAssetRouter"; 
import addAssetRouter from "./routes/addAssetRouter"; 
import delAssetRouter from "./routes/delAssetRouter";
import updAssetRouter from "./routes/updAssetRouter";

const app = express();
const port = 3000;
app.use(cors({ origin: "*" }));
app.use(express.json());

app.use("/", rootRouter);
app.use("/getAsset", getAssetRouter);
app.use("/addAsset", addAssetRouter);
app.use("/delAsset", delAssetRouter);
app.use("/updAsset", updAssetRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
