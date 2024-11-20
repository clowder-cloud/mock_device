import * as fs from "fs/promises";
import { CatData } from "./types/CatTypes";


export function catDataWithID(catID: number): Promise<CatData> {
  return fs
    .readFile(`${__dirname}/testData/cat_${catID}.json`, "utf-8")
    .then((rawData: any) => {
      const catData: CatData = JSON.parse(rawData);
      return catData;
    });
}
