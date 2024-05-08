import express from "express";
import getAssetRouter from "./routes/getAssetRouter"; 
import addAssetRouter from "./routes/addAssetRouter"; 
import delAssetRouter from "./routes/delAssetRouter";
import rootRouter from "./routes/rootRouter"; 

const app = express();
const port = 3000;
app.use(express.json());

app.use("/", rootRouter);
app.use("/getAsset", getAssetRouter);
app.use("/addAsset", addAssetRouter);
app.use("/delAsset", delAssetRouter);



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
