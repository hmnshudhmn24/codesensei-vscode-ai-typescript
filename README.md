
# 🧠 CodeSensei: VS Code AI Assistant

**CodeSensei** is an AI-powered Visual Studio Code extension that helps you learn TypeScript as you code. It explains errors, reviews your code, and teaches concepts inline using the OpenAI API.



## 🚀 Features

- 🧠 Explains selected TypeScript code in plain English.
- 🧪 Suggests improvements and reviews TypeScript code.
- 🛠️ “What does this do?” command palette for learning on-the-fly.



## 🧰 Tech Stack

- TypeScript
- VS Code Extension API
- OpenAI GPT (gpt-4)



## 📦 Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/codesensei-vscode-ai.git
   cd codesensei-vscode-ai
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure OpenAI API Key**

   In VS Code:
   - Go to `Settings → Extensions → CodeSensei`
   - Set your `OpenAI API Key`.

   OR create a `.vscode/settings.json` file:

   ```json
   {
     "codesensei.apiKey": "YOUR_OPENAI_API_KEY"
   }
   ```

4. **Run the Extension**

   - Press `F5` to open a new Extension Development Host window.



## 💡 Usage

- Open a `.ts` or `.tsx` file.
- Select a code block.
- Open the Command Palette (`Ctrl+Shift+P`) and choose:
  - `Explain Code with CodeSensei`
  - `Review Code with CodeSensei`



## 🛡️ Permissions & Security

Your API key is stored in local settings and not shared or sent anywhere else except to OpenAI's API securely.

