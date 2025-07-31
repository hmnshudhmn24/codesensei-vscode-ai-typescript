
import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
  const explainCommand = vscode.commands.registerCommand('codesensei.explainCode', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const selection = editor.selection;
    const code = editor.document.getText(selection);
    if (!code) return vscode.window.showErrorMessage("Please select TypeScript code to explain.");

    const apiKey = vscode.workspace.getConfiguration("codesensei").get("apiKey");
    if (!apiKey) return vscode.window.showErrorMessage("Set your OpenAI API Key in settings.");

    try {
      const res = await axios.post("https://api.openai.com/v1/chat/completions", {
        model: "gpt-4",
        messages: [
          { role: "system", content: "You're a TypeScript tutor. Explain the selected code in simple English." },
          { role: "user", content: code }
        ]
      }, {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        }
      });

      const explanation = res.data.choices[0].message.content;
      vscode.window.showInformationMessage(explanation);
    } catch (error) {
      vscode.window.showErrorMessage("Error getting explanation.");
    }
  });

  context.subscriptions.push(explainCommand);
}

export function deactivate() {}
