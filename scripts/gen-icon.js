const fs = require("fs");
const path = require("path");
const pngToIco = require("png-to-ico");

const input = path.join(__dirname, "..", "icon.png");
const output = path.join(__dirname, "..", "icon.ico");

pngToIco(input)
  .then((buf) => {
    fs.writeFileSync(output, buf);
    console.log("Wrote", output);
  })
  .catch((err) => {
    console.error("Failed to generate icon.ico", err);
    process.exit(1);
  });
