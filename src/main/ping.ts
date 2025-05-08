import { ipcMain } from "electron";

export const ping = async () => {
  return "pong";
};

ipcMain.handle("ping", ping);
