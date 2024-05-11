import { useState, useEffect } from 'react'
import Editor from '@monaco-editor/react'

export const SidePanel = () => {
  /** @type {import('@webcontainer/api').FileSystemTree} */

  return (
    <main>
      <h3>SidePanel Page</h3>
      <div>
        <div className="flex flex-col h-screen overflow-y-auto">
          <div className="flex-1 flex flex-col">
            {/* {loading && <span className="loading loading-spinner loading-sm"></span>} */}

            {/* {!loading && (
              <div role="tablist" className="tabs tabs-lifted">
                {files
                  .filter((file) => file.isFile())
                  .map((file) => (
                    <a
                      role="tab"
                      className={`tab ${file.name === activeFileName ? 'tab-active' : ''}`}
                      onClick={() => setActiveFileName(file.name)}
                    >
                      {file.name}
                    </a>
                  ))}
              </div>
            )} */}

            <div className="flex-1 bg-white p-4">
              {/* <div className="h-full w-full border-2 border-dashed border-gray-300 rounded-md"></div> */}
              {/* <Editor
                height="80vh"
                theme="vs-dark"
                path={activeFileName}
                language="javascript"
                value={activeFileContent}
              /> */}
            </div>
          </div>

          <div className="h-64 bg-gray-100 p-4">
            <div className="h-full w-full bg-white rounded-md shadow p-4 text-sm text-gray-500">
              AI Chat Placeholder
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SidePanel

const files = {
  'index.html': {
    file: {
      contents: `
                <!DOCTYPE html>
                <html lang="en">
                  <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Lit App</title>
                  </head>
                  <body>
                    <my-element></my-element>
                    <script type="module" src="/index.js"></script>
                  </body>
                </html>
           `,
    },
  },
  'index.js': {
    file: {
      contents: `
                import { LitElement, html, css } from 'lit';

                class MyElement extends LitElement {
                  static styles = css\`
                    :host {
                      display: block;
                      padding: 1em;
                      background-color: #f0f0f0;
                    }
                  \`;
                  
                  render() {
                    return html\`<h1>Hello from Lit!</h1>\`;
                  }
                }

                customElements.define('my-element', MyElement);
              `,
    },
  },
  'package.json': {
    file: {
      contents: `
                {
                  "name": "lit-app",
                  "private": true,
                  "version": "0.0.0",
                  "type": "module",
                  "main": "dist/my-element.es.js",
                  "exports": {
                    ".": "./dist/my-element.es.js"
                  },
                  "scripts": {
                    "dev": "vite",
                    "build": "vite build"
                  },
                  "dependencies": {
                    "lit": "^2.5.0"
                  },
                  "devDependencies": {
                    "vite": "^4.0.4"
                  }
                }
`,
    },
  },
  'vite.config.js': {
    file: {
      contents: `
                import { defineConfig } from 'vite'

                export default defineConfig({
                  build: {
                    lib: {
                      entry: 'index.js',
                      name: 'my-element',
                      fileName: 'my-element',
                      formats: ['es']
                    },
                  },
                })
`,
    },
  },
}
