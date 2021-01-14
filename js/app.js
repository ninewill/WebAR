import { VctrApi } from "https://www.vectary.com/viewer-api/v1/api.js";

async function run() {
  function errHandler(err) {
    console.log("API error", err);
  }

  async function onReady() {
    console.log("API ready");
    try {
      //Example
      const allSceneObjects = await viewerApi.getObjects();
      console.log("Objects", allSceneObjects);
    } catch (e) {
      errHandler(e);
    }
  }

  const viewerApi = new VctrApi(
    "d6c1f27d-6a27-4c7e-bd7d-bd19d7faa56c",
    errHandler
  );

  try {
    await viewerApi.init();
    onReady();
  } catch (e) {
    errHandler(e);
  }
}

run();
