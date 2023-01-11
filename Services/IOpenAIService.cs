namespace ChatterBox.Services;

public interface IOpenAIService
{
    Task<string> GetAnimalNames(string animalName);
}