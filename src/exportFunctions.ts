import {createSpreadsheet} from "ts-spreadsheets";
import {ExportType} from "./exportType.ts";

async function exportWithTsSpreadsheet(type: "excel" | "csv", data: Array<any> | Object, fileName: string) {
    const excelSpreadsheet = createSpreadsheet(data, {
        type
    });
    await excelSpreadsheet.store(fileName);
}

export const exportFunctions: Record<ExportType, Function> = {
    [ExportType.excel]: async (data: Array<any> | Object, fileName: string) => {
        await exportWithTsSpreadsheet("excel", data, fileName);
    },
    [ExportType.csv]: async (data: Array<any> | Object, fileName: string) => {
        await exportWithTsSpreadsheet("csv", data, fileName);
    },
    [ExportType.json]: async (data: Array<any> | Object, fileName: string) => {
        const content = JSON.stringify(data);
        await Bun.write(fileName, content);
    },
}