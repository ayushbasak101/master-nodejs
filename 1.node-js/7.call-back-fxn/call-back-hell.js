const fs = require("fs");

fs.readFile("gogo.txt", "utf-8", (error, data) => {
  if (error) {
    console.error(" Error reading file:", error);
    return;
  }

 
  const modifiedData = data.toUpperCase();

 
  fs.writeFile("output.txt", modifiedData, (err) => {
    if (err) {
      console.error(" Error writing file:", err);
      return;
    }
    console.log("File written successfully to output.txt");
  });
});
