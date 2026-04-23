interface EmailConfirmationProps {
  name: string;
  email: string;
  message: string;
}

const EmailConfirmation = ({
  name,
  email,
  message,
}: EmailConfirmationProps) => {
  return (
    <html lang="en">
      <body>
        <div>
          <h1>Cornelius Motanya</h1>

          <h3>Thanks for out, {name}!</h3>

          <p>
            We have received your email and we will get back to you within 24-48
            hours through {email}
          </p>

          <hr />

          <p>Your message: {message}</p>

          <hr />

          <span>
            This is an automated confirmation. Please don&apos;t reply to this
            email.
          </span>
        </div>
      </body>
    </html>
  );
};

export default EmailConfirmation;
