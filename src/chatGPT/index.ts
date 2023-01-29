import { Configuration, OpenAIApi, CreateCompletionRequestPrompt } from "openai";

class ChatGPT {
    static instance: OpenAIApi | null
    private constructor(config: Configuration) {
        ChatGPT.instance = new OpenAIApi(config);
    }

    public static getInstance() {
        if (!this.instance) {
            const config = new Configuration({
                apiKey: process.env.OPENAI_API_KEY,
                organization: process.env.OPENAI_ORGANIZATION_ID,
            });
            new ChatGPT(config);
        }
        return this.instance;
    }
}

export default ChatGPT.getInstance();
