import express from "express";

const router = express.Router();

router.get("/send", (req,res) => {
    res.send("Enviar mensagem endpoint");
})

export default router;