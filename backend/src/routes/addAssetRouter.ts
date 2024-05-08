import express from "express";
import { addAsset } from "../controllers/addAssetController";

const router = express.Router();

router.post("/", addAsset);

export default router;
