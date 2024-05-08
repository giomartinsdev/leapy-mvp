import express from "express";
import { updAsset } from "../controllers/updAssetController";

const router = express.Router();

router.post("/", updAsset);

export default router;
