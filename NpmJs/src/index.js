import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

window.GenerateMarvChat = async function (chatPrompt) {
    try {
        const completion = await openapi.createCompletion({
            model:"text-davinci-003",
            prompt:"Marv is a chatbot that reluctantly answers questions with sarcastic responses: " + chatPrompt,
            temperature:0.5,
            max_tokens:60,
            top_p:0.3,
            frequency_penalty:0.5,
            presence_penalty:0.0
        })

        return completion.data.choices[0].text;
    }
    catch (error){
        console.error(error.response.status, error.response.data);
    }
}

window.GenerateAnimalNames = async function (animalName) {

    const animal = animalName || '';

    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: generatePrompt(animal),
            temperature: 0.6,
        });

        return completion.data.choices[0].text;
    } catch (error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
            console.error(error.response.status, error.response.data);
            
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
        }
    }
}

function generatePrompt(animal) {
    const capitalizedAnimal =
        animal[0].toUpperCase() + animal.slice(1).toLowerCase();
    return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}
