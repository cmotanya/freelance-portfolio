import Link from "next/link";

interface EmailNotificationProps {
  name: string;
  email: string;
  message: string;
  submittedAt: string;
}

const EmailNotification = ({
  name,
  email,
  message,
  submittedAt,
}: EmailNotificationProps) => {
  return (
    <html lang="en">
      <body>
        <h1>New contact form submission.</h1>

        <h3>Message from {name}</h3>

        <div>
          <p>
            <strong>From: </strong>
            {name}
          </p>
          <p>
            <strong>Email: </strong>
            <Link href={`{mailto:${email}}`}>{email}</Link>
          </p>
          <p>
            <strong>Received: </strong>
            {submittedAt}
          </p>
        </div>

        <hr />

        <p>Message: {message}</p>

        <hr />

        <Link href={`mailto:${email}?subject=Your message to Cornelius.`}>
          Reply to {name}
        </Link>
      </body>
    </html>
  );
};

export default EmailNotification;
