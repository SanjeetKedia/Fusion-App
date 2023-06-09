import { generate } from "@pdfme/generator";
import { template } from "./template.js";

export async function generatePDF(inputs) {
  // const inputs = [
  //   {
  //     name: "Thuya Tun",
  //   },
  // ];

  const pdf = await generate({ template, inputs });

  const blob = new Blob([pdf.buffer], { type: "application/pdf" });
  window.open(URL.createObjectURL(blob));
}
