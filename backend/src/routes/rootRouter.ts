import express from "express";

const router = express.Router();

router.get("/", () => {
  return "hi three"
});

export default router;
