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

/**
 * Converts and exports the data in a variety of formats
 * @param data Can be any array or object
 * @param target Can be a file path (e.g. when you're using bun or node) or an ExportType if you just need the content of the export result
 */
export async function exportToFile(data: Array<any> | Object, target: string|ExportType) {
    const exportType = getExportType(target);
    const func = exportFunctions[exportType];
    return await func(data, target);
}
