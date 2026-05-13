import ex from "express";
import { health } from "./routes/v1/health";
import settings from "./common/_settings";

const app = ex();

app.use('/health', health);
app.listen(settings.port, () => {
  console.log("API rodando na URL " + settings.root);settings
})
