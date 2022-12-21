export const fileReader = (
  e: React.FormEvent<HTMLInputElement>, setState: (value: string) => void
) => {
  const curFile = e?.currentTarget?.files?.[0];
  const reader = new FileReader();
  if (curFile) {
    reader.readAsDataURL(curFile);
    reader.onload = (e) => {
      setState(`${e.target?.result}`);
    };
  }
};


export const fileToUrl = (
  file: File|undefined|null,
  setState: (value: string) => void
): void => {
  const reader = new FileReader();
  if (file) {
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setState(`${e.target?.result}`);
    };
  }
};