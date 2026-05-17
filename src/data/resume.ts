// Dynamically find the first PDF in src/docs/.
// When updating your resume, just replace the PDF file in src/docs/ — no code changes needed.
const docsContext = (require as any).context("../docs", false, /\.pdf$/);
const pdfFiles: string[] = docsContext.keys();

export const resumePath: string =
  pdfFiles.length > 0 ? docsContext(pdfFiles[0]) : "";

export const resumeFileName: string =
  pdfFiles.length > 0 ? pdfFiles[0].replace("./", "") : "No resume found";
