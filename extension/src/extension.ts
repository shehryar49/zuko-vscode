'use strict';

import * as net from 'net';

import {Trace} from 'vscode-jsonrpc';
import { window, workspace, commands, ExtensionContext, Uri } from 'vscode';
import { LanguageClient, LanguageClientOptions, StreamInfo, Position as LSPosition, Location as LSLocation, TransportKind } from 'vscode-languageclient/node';

let lc: LanguageClient;

export function activate(context: ExtensionContext) {

    // This line of code will only be executed once when your extension is activated
    
    // TODO: Start server exe and communicate with it
    let serverExe;
    if(process.platform == "win32")
    {
        serverExe = "C:\\zuko\\lsp\\firebender.exe";
    }
    else
      serverExe = '/opt/zuko/lsp/firebender';

    const fs = require("fs"); // Or `import fs from "fs";` with ESM
    if (!fs.existsSync(serverExe)) 
    {
     console.log("Zuko's LSP server was not found.");
     return;   
    }
    console.log("Zuko LSP started!");
    let ServerOptions = {
        run: {command: serverExe},
        debug: {command: serverExe}
    }

    let clientOptions: LanguageClientOptions = {
        // Register the server for plain text documents
        documentSelector: [
            {
                pattern: '**/*.zk',
            }
        ],

    }

    let lspClient = new LanguageClient("Zuko LSP", ServerOptions, clientOptions);

    // For debugging only
    lspClient.setTrace(Trace.Verbose);

    lspClient.start();

}

export function deactivate() {
    return lc.stop();
}
