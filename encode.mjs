import { Interface } from "ethers";

const iface = new Interface([
  "function initialize(string,string)"
]);

const initData = iface.encodeFunctionData("initialize", ["SkillCoin", "SKILL"]);
console.log("Encoded init data:", initData);
