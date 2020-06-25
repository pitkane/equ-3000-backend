import { createServer } from "./src/server";

const run = async (): Promise<void> => {
  const server = await createServer();

  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server running PLEASE @ ${server.info.uri}`);
};

run();
