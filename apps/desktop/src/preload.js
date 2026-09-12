const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('popRecorder', {
  get: () => ipcRenderer.invoke('recording:get'), toggle: () => ipcRenderer.invoke('recording:toggle'),
  remove: id => ipcRenderer.invoke('recording:delete', id), describe: (id, value) => ipcRenderer.invoke('recording:description', id, value),
  marker: (id, marker) => ipcRenderer.invoke('recording:marker', id, marker), save: () => ipcRenderer.invoke('project:save'),
  open: () => ipcRenderer.invoke('project:open'), html: () => ipcRenderer.invoke('project:html'), pdf: () => ipcRenderer.invoke('project:pdf'),
  onUpdate: callback => ipcRenderer.on('recording:update', (_, value) => callback(value))
});
