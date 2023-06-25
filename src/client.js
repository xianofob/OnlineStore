import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "fp6q5e9s",
    dataset: "production",
    useCdn: "false",
    apiVersion: "2023-06-25"
});

export default client;