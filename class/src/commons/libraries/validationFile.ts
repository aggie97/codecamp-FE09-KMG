const checkFileValidation = (file?: File) => {
  if (!file?.size) {
    alert("파일이 없습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일의 크기가 너무 커서 업로드 할 수 없습니다.");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    console.log(file.type);
    alert("jpeg 파일 또는 png 파일만 업로드 가능합니다.");
    return false;
  }

  return true;
};

export default checkFileValidation;
