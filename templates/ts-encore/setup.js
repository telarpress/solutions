export default function setup (){
  if (!shell.which('encore')) {
    checkEncore()
    console.error(
      'encore command does not exist! Please install encore and run this command again.',
    )
  }
}
function checkEncore() {
  switch (os.type()) {
  case 'Linux':
    this.log(
      'To install encore use `curl -L https://encore.dev/install.sh | bash` ',
    )
    break
  case 'Darwin':
    this.log('To install encore use `brew install encoredev/tap/encore` ')
    break
  case 'Windows_NT':
    this.log(
      'To install encore use `iwr https://encore.dev/install.ps1 | iex` ',
    )
    break

  default:
    this.log('Please check the docs for installation.')
    break
  }

  this.log('Doc: https://encore.dev/docs/install ')
}