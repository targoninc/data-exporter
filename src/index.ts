import {exportFunctions} from "./exportFunctions.ts";
import {ExportType} from "./exportType.ts";

function getExportType(fileName: string) {
    const extension = fileName.split(".").at(-1);
    if (!extension) {
        throw new Error(`File name '${fileName}' does not have an extension`);
    }

    if (!Object.values(ExportType).includes(extension as ExportType) || !exportFunctions[extension as ExportType]) {
        throw new Error(`Extension '${extension}' is not a supported export type. Valid options are ${
            Object.values(ExportType)
                .filter(e => exportFunctions[e as ExportType] !== undefined)
                .join(', ')}`);
    }

    return extension as ExportType;
}

export async function exportToFile(data: Array<any> | Object, fileName: string) {
    const exportType = getExportType(fileName);
    const func = exportFunctions[exportType];
    await func(data, fileName);
}