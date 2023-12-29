export default function findFileExtension(str: string) {
  var filenames = str.split(".");
  var extension = filenames[1];
  if (extension === "docx" || extension === "doc") {
    return "/icons/files/docx.png";
  } else if (extension === "xlsx") {
    return "/icons/files/xlsx.png";
  } else if (extension === "pptx") {
    return "/icons/files/ppt.png";
  } else if (extension === "pdf") {
    return "/icons/files/pdf.png";
  } else if (extension === "zip") {
    return "/icons/files/zip.png";
  } else if (
    extension === "jpg" ||
    extension === "JPG" ||
    extension === "png" ||
    extension === "PNG"
  ) {
    return "/icons/files/jpg.png";
  } else if (extension === "txt") {
    return "/icons/files/txt.png";
  } else {
    return "/icons/files/file.png";
  }
}
