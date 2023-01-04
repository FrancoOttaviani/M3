module.exports = {
  pwd: () => process.stdout.write(Date()),
  date: () => process.stdout.write(process.cwd()),
  ls: () => process.stdout.write(console.log("lsls")),
};
