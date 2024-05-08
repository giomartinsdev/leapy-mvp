import express from "express";
import { getAsset } from "../controllers/getAssetController";

const router = express.Router();

router.post("/", getAsset);

export default router; 
