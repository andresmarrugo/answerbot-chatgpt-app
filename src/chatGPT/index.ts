import { Configuration, OpenAIApi, CreateCompletionRequestPrompt } from "openai";

class ChatGPT {
    static instance: OpenAIApi | null
    private constructor(config: Configuration) {
        ChatGPT.instance = new OpenAIApi(config);
    }

    public static getInstance() {
        if (!this.instance) {
            console.log('process.env.OPENAI_API_KEY', process.env.OPENAI_API_KEY)
            const config = new Configuration({
                apiKey: "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",
                organization: process.env.OPENAI_ORGANIZATION_ID
            });
            new ChatGPT(config);
        }
        return this.instance;
    }
}

export default ChatGPT.getInstance();
