import express from "express";

const router = express.Router();

router.get("/send", (req,rjes) => {
    res.send("Enviar mensagem endpoint");
})

export default router;