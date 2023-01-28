import React, { useState } from 'react';
import ChatGPT from 'src/chatGPT';

function ChatGPTView() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await ChatGPT?.createCompletion({
      model: "text-davinci-003",
      prompt: input + ", la salida debe ser lo mas breve posible y con un maximo de 500 tokens",
      max_tokens: 500
    });
    setOutput(response?.data.choices[0].text as string);
    setIsLoading(false);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  }

  return (
    <div className="bg-gray-200 min-h-screen p-6">
      <div className="flex flex-col">
        <div className="flex-1">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="input2">
                  Escribe lo que necesitas saber
                </label>
                <textarea
                  className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full leading-5"
                  id="input2"
                  value={input}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  style={{ width: "100%" }}
                  required
                ></textarea>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
                {isLoading ? "Espera.." : 'Generar respuesta'}
              </button>
            </form>
          </div>
        </div>
        {output && (
          <div className="flex-1 mt-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <label className="block text-gray-700 font-medium mb-2">Respuesta</label>
              <div className="bg-white p-4 rounded-lg" key={output}>{output}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatGPTView;
