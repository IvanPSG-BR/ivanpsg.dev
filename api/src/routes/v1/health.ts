import { router } from "../../common/_settings";

export const health = router.get("/", async (req, res) => {
  return res.status(200).send({
    hotel: "trivago"
  })
})
