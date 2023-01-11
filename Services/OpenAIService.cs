using Microsoft.JSInterop;

namespace ChatterBox.Services;

public class OpenAIService : IOpenAIService
{
    private readonly IJSRuntime _jsRuntime;

    public OpenAIService(IJSRuntime jsRuntime)
    {
        _jsRuntime = jsRuntime;
    }

    public async Task<string> GetAnimalNames(string animalName)
    {
        return await _jsRuntime.InvokeAsync<string>("GenerateAnimalNames", animalName);
    }
}