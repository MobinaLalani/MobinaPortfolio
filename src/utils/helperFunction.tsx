import Image, { StaticImageData } from "next/image";
import { projectDetails } from "@/data/projects";
export type ProjectSection = {
  title: string;
  paragraphs: string[];
  images: (string | StaticImageData)[];
};

export function getProjectById(id: number): ProjectSection | null {
  return projectDetails[id] || null; // اگر id پیدا نشد، null برگردون
}
