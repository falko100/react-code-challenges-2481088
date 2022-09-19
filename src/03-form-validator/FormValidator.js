import { useState } from 'react';

export default function FormValidator() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);

  function submitForm(event) {
    event.preventDefault();
    setSuccessMessage(null);
    const errors = [];

    if ((email.match(/@/g) || []).length !== 1) {
      errors.push('Email must be valid');
    }

    if (password !== passwordConfirm) {
      errors.push('Passwords do not match');
    }

    if (password.length < 8) {
      errors.push('Password should be 8 or more characters');
    }

    setErrors(errors);

    if (errors.length > 0) {
      return;
    }

    setSuccessMessage('Yea lets go');
  }

  return (
    <div>
      {successMessage === null ? (
        <form onSubmit={submitForm}>
          <h2>Sign Up!</h2>
          {errors && <div style={{color: '#800'}}>{errors.join(', ')}</div>}
          <label htmlFor="email">Email</label>
          <input
            type="text" name="email"
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password" name="password"
            onChange={e => setPassword(e.target.value)}
          />
          <label htmlFor="password-confirm">Confirm Password </label>
          <input
            type="password" name="password-confirm"
            onChange={e => setPasswordConfirm(e.target.value)}
          />
          <input type="submit" value="Submit"/>
        </form>
      ) : <div> Thanks for your submission </div>}
    </div>
  );
}
