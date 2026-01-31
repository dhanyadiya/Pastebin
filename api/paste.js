import { nanoid } from "nanoid";
import fs from "fs";
import path from "path";
import os from "os";

const DATA_FILE = path.join(os.tmpdir(), "pastes.json");

function readPastes() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({}));
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
}

function savePastes(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data));
}

export default function handler(req, res) {
  const data = readPastes();

  // CREATE paste
  if (req.method === "POST") {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ error: "Content is required" });
    }

    const id = nanoid(6);
    data[id] = content;
    savePastes(data);

    return res.status(201).json({ id });
  }

  // READ paste
  if (req.method === "GET") {
    const { id } = req.query;

    if (!id || !data[id]) {
      return res.status(404).json({ error: "Paste not found" });
    }

    return res.status(200).json({ content: data[id] });
  }

  res.status(405).json({ error: "Method not allowed" });
}
