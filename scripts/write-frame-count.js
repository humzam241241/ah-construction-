const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "public", "hero-frames");
if (!fs.existsSync(dir)) {
  console.warn("hero-frames folder not found, skipping count.");
  process.exit(0);
}

const files = fs.readdirSync(dir).filter((f) => /^frame_\d+\.jpg$/i.test(f));
const count = files.length;
fs.writeFileSync(path.join(dir, "count.json"), JSON.stringify({ count }));
console.log("Wrote count.json: " + count + " frames");
