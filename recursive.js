const countTextFiles = (dir) => {
  if (dir === null) return 0;
  let count = 0;
  for (file in dir) {
    if (file.endsWith('.txt')) {
      count += 1
    }
  }
  for (subdir in dir) {
    count += countTextFiles(subdir);
  }
}