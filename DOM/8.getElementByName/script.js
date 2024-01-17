function collectData() {
  const languageProficiencyEl = document.getElementsByName(
    "languageProficiency"
  );

  console.log(languageProficiencyEl);

  //Loop through the nodelist to find the selected radio button

  for (let i = 0; i < languageProficiencyEl.length; i++) {
    if (languageProficiencyEl[i].checked) {
      console.log(`Selected language is: ${languageProficiencyEl[i].value}`);
    }
  }

  //Log all elements with the name email

  const emailsEl = document.getElementsByName("email");
  console.log(emailsEl);
}
