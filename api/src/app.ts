import ex from "express";
import { health } from "./routes/v1/health";
import config from "./common/_config";

const app = ex();

app.use('/health', health)
app.listen(config.port, () => {
  console.log("API rodando na URL " + config.root)
})
