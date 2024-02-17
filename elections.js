const fs = require("fs");
const readline = require("readline");

const partyObject = {
  C: "Conservative Party",
  L: "Labour Party",
  UKIP: "UKIP",
  LD: "Liberal Democrats",
  G: "Green Party",
  Ind: "Independent",
  SNP: "SNP",
};

async function processLineByLine(filepath) {
  let lines = [];
  const fileStream = fs.createReadStream(filepath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    lines.push(line);
  }
  return lines;
}

const searchConstituency = (constituencies, constituencyName) => {
  const constituencyIndex = constituencies.findIndex(
    (constituency) => constituency.name === constituencyName
  );

  console.log(constituencyIndex);
  return constituencyIndex;
};

const main = async () => {
  const extractVotesCount = async (filepath) => {
    const lines = await processLineByLine(filepath);
    //array of objects
    let constituencies = [];
    constituencies = lines.map((line, index) => {
      const words = line.split(",");
      let constituency = {};
      for (let i = 1; i < words.length; i += 2) {
        const voteCount = words[i].trim();
        const party = words[i + 1].trim();

        constituency = {
          name: words[0],
          results: {
            ...constituency.results,
            [partyObject[party]]: voteCount,
          },
        };
      }
      // console.log(constituency);
      return constituency;
    });
    return constituencies;
  };
  const votingResults = await extractVotesCount("./results.txt");
  const votingOverride = await extractVotesCount("./override.txt");
  // console.log(searchConstituency(votingOverride, "Cardiff"));

  const finalResults = [...votingResults];

  votingOverride.forEach((constituency) => {
    const resultsIndex = searchConstituency(finalResults, constituency.name);
    if (resultsIndex >= 0) {
      console.log(finalResults[resultsIndex].results);
      console.log(constituency);
      finalResults[resultsIndex].results = {
        ...finalResults[resultsIndex].results,
        ...constituency.results,
      };
      console.log(finalResults[resultsIndex]);
    } else {
      finalResults.push(constituency);
    }
  });

  // const finalResults = [...votingResults, ...votingOverride];
  console.log(finalResults);
};

main();
