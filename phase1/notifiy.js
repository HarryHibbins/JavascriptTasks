const notifyByEmail = (email) => {
  return `Email sent to: <${email}>`
}
const notifyByText = (phoneNumber) => {
  return `Text sent to: <${phoneNumber}>`
}

const notify = (string, callback) => {
  return callback(string)
}

const email = notify("harry@gmail", notifyByEmail)
const text = notify("01122334455", notifyByText)

console.log(email)
console.log(text)