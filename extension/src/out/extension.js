'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_jsonrpc_1 = require("vscode-jsonrpc");
const node_1 = require("vscode-languageclient/node");
let lc;
function activate(context) {
    // This line of code will only be executed once when your extension is activated
    // TODO: Start server exe and communicate with it
    let serverExe;
    if (process.platform == "win32") {
        serverExe = "C:\\zuko\\lsp\\zuko-lsp.exe";
    }
    else
        serverExe = '/opt/zuko/lsp/zuko-lsp';
    const fs = require("fs"); // Or `import fs from "fs";` with ESM
    if (!fs.existsSync(serverExe)) {
        console.log("Zuko's LSP server was not found.");
        return;
    }
    console.log("Zuko LSP started!");
    let ServerOptions = {
        run: { command: serverExe },
        debug: { command: serverExe }
    };
    let clientOptions = {
        // Register the server for plain text documents
        documentSelector: [
            {
                pattern: '**/*.zk',
            }
        ],
    };
    let lspClient = new node_1.LanguageClient("Zuko LSP", ServerOptions, clientOptions);
    // For debugging only
    lspClient.setTrace(vscode_jsonrpc_1.Trace.Verbose);
    lspClient.start();
}
exports.activate = activate;
function deactivate() {
    return lc.stop();
}
exports.deactivate = deactivate;
