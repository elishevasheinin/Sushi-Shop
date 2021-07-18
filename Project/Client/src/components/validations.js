function checkName(name) {
  if (name.length === 0)
    return "This field is required";
  const lettersRegex = /^[A-Za-z\u0590-\u05FF ]+$/;
  if (!name.match(lettersRegex))
    return "Only letters are allowed";
  if (name.length < 2)
    return "The name you inserted is too short";
  return "";
}

function checkEmpty(item) {
  if (item.length === 0)
    return "This field is required";
  return "";
}

function checkPhoneNumber(phoneNumber) {
  if (phoneNumber.length === 0)
    return "This field is required";
  const num = /^0?(([23489]{1}\d{7})|[5]{1}\d{8})$/;
  if (!phoneNumber.match(num))
    return "Invalid phone number";
  if (phoneNumber.length < 9)
    return "The phone number you inserted is too short";
  if (phoneNumber.length > 10)
    return "The phone number you inserted is too long";
  return "";
}

function checkEmail(email) {
  if (email.length === 0)
    return "This field is required";
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (email.match(emailRegex))
    return "";
  return "The email you inserted is invalid";
}

export {
  checkName,
  checkEmpty,
  checkEmail,
  checkPhoneNumber
}