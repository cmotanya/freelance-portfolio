import { Link, Tailwind } from "react-email";

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
      <Tailwind>
        <body className="font-sans">
          <section>
            <h1 className="text-center">New Message Alert!</h1>

            <div className="space-y-5 rounded-2xl border border-gray-300 bg-zinc-100 px-8 py-0.5">
              <div className="leading-none">
                <p className="font-semibold tracking-wide text-gray-800">
                  FROM
                </p>
                <p className="text-gray-600">{name}</p>
              </div>

              <div className="leading-none">
                <p className="font-semibold text-gray-800">EMAIL</p>
                <Link href={`mailto:${email}`}>{email}</Link>
              </div>

              <div className="leading-none">
                <p className="font-semibold text-gray-800">RECEIVED</p>
                <p className="text-gray-600">{submittedAt}</p>
              </div>
            </div>

            <hr />

            <div>
              <p className="font-bold text-gray-800 uppercase">Message</p>
              <p className="text-gray-600">{message}</p>
            </div>

            <hr />

            <Link
              href={`mailto:${email}?subject=Re:Your Message to Cornelius.`}
            >
              Reply to {name}
            </Link>

            <div className="text-xs">
              <p>
                This message was sent via the contact form on your portfolio
                website.
              </p>
              <p className="text-center">
                © {new Date().getFullYear()} Cornelius Motanya
              </p>
            </div>
          </section>
        </body>
      </Tailwind>
    </html>
  );
};

export default EmailNotification;

// Styles
