const axios = require('axios');
const webhookURL = process.env.NEXT_PUBLIC_WEB_HOOK_SLACK;

export default async function formProxy(req, res) {
  try {
    await axios.post(webhookURL, req.body.payload)
    res.status(200).send({ success: true });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      success: false,
      error: e
    });
  }
}