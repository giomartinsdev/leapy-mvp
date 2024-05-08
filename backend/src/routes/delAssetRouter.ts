import express from "express";
import { delAsset } from "../controllers/delAssetController";

const router = express.Router();

router.post("/", delAsset);

export default router;
