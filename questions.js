// Questions to be asked on the command line
const questions = () => {
return( [
    {
      type: 'input',
      name: 'firstname',
      message: 'Customer First Name'
    },
    {
      type: 'input',
      name: 'lastname',
      message: 'Customer Last Name'
    },
    {
      type: 'input',
      name: 'phone',
      message: 'Customer Phone Number'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Customer Email Address'
    }
  ]
)};

module.exports = {
    questions
}