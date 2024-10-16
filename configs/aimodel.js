const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Write a prompt to generate 30 second video on topic: Interesting historical story with ai image prompt in realistic format for each scene and give me result in json format with imagePrompt and contentText as field , No plain text "},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"imagePrompt\": \"A bustling medieval marketplace, with merchants selling their wares and people going about their daily lives. Focus on a young woman with bright eyes, holding a book and looking curious.\",\n    \"contentText\": \"In the heart of 14th century Florence, a young woman named Caterina da Siena yearned for something more than the ordinary life of a wife and mother. She felt a calling, a desire to serve God and spread his message.\"\n  },\n  {\n    \"imagePrompt\": \"Caterina in a simple white dress, kneeling in prayer in a dimly lit room, with a halo of light surrounding her head. A strong sense of serenity and determination in her face.\",\n    \"contentText\": \"Ignoring social norms and expectations, Caterina dedicated herself to spiritual pursuits. She spent hours in prayer, seeking divine guidance and experiencing profound visions.\"\n  },\n  {\n    \"imagePrompt\": \"Caterina, dressed in simple white robes, standing confidently before a large crowd, speaking passionately with outstretched arms. The crowd, composed of both men and women, listens attentively.\",\n    \"contentText\": \"Her unwavering faith and powerful words attracted followers from all walks of life. She became known as a powerful preacher, challenging the Church hierarchy and advocating for peace and justice.\"\n  },\n  {\n    \"imagePrompt\": \"A portrait of a stern-faced Pope, with a worried expression, looking at Caterina with a mixture of respect and apprehension.\",\n    \"contentText\": \"Even the Pope, known for his staunch opposition to women's influence, recognized her powerful message. He sought her counsel on matters of state and the Church.\"\n  },\n  {\n    \"imagePrompt\": \"Caterina, looking frail but resolute, lying in bed surrounded by loved ones. A soft glow emanates from her, as if she were being lifted into heaven.\",\n    \"contentText\": \"Caterina's life was cut short at the young age of 33, but her legacy lived on. She became a revered saint, known for her unwavering faith, passionate advocacy, and profound impact on the Church and society.\"\n  }\n]\n``` \n"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());