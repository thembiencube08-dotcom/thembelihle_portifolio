import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 100px 20px;
  background: var(--bg);
  position: relative;
  overflow: hidden;
`;


const DotsBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(148, 163, 184, 0.4) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.35;
  pointer-events: none;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;


const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
`;

const Description = styled.p`
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.8;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--surface-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  text-decoration: none;
  font-size: 1.1rem;
  transition: background 0.3s, transform 0.3s, color 0.3s;

  &:hover {
    background: var(--accent);
    color: #fff;
    transform: translateY(-3px);
  }
`;


const FormCard = styled.div`
  background: var(--surface);
  border-radius: 24px;
  padding: 40px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text);
`;

const Input = styled.input`
  padding: 14px 16px;
  border: 1.5px solid var(--border);
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  color: var(--text);
  background: var(--surface);
  transition: border-color 0.3s, background 0.3s;
  font-family: inherit;

  &:focus {
    border-color: var(--accent);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const Textarea = styled.textarea`
  padding: 14px 16px;
  border: 1.5px solid var(--border);
  border-radius: 10px;
  font-size: 1rem;
  outline: none;
  resize: vertical;
  min-height: 160px;
  color: var(--text);
  background: var(--surface);
  transition: border-color 0.3s, background 0.3s;
  font-family: inherit;

  &:focus {
    border-color: var(--accent);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const SubmitButton = styled.button`
  padding: 16px;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #6c4cec;
  }

  &:disabled {
    background: #6b7280;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.div<{ $error?: boolean }>`
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  font-size: 1rem;
  border: 1.5px solid;
  background: ${({ $error }) => ($error ? "rgba(248, 113, 113, 0.14)" : "var(--success-bg)")};
  border-color: ${({ $error }) => ($error ? "rgba(248, 113, 113, 0.45)" : "var(--success-border)")};
  color: ${({ $error }) => ($error ? "#b91c1c" : "var(--success-text)")};
`;

interface FormData {
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const WEB3FORMS_ACCESS_KEY =
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
    "657ca6d0-6003-4e5f-aa5a-33051979cd92";

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: formData.subject,
          email: formData.email,
          message: formData.message,
          name: formData.email,
        }),
      });

      const data = await response.json();
      console.log("Web3Forms response:", response.status, data);

      if (!response.ok || data.success === false) {
        const msg = data?.message || `Submission failed (status ${response.status})`;
        setError(msg);
        console.error("Web3Forms submit failed:", msg, data);
        return;
      }

      setSubmitted(true);
      setFormData({ email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Web3Forms submit error:", err);
      setError("Sorry, something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = formData.email && formData.subject && formData.message;

  return (
    <Wrapper id="contact">
      <DotsBackground />
      <Container>
        
        <LeftCol>
          <Title>Let's Connect</Title>
          <Description>
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </Description>
          <SocialLinks>
            
            <SocialIcon href="https://github.com" target="_blank" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </SocialIcon>
            
            <SocialIcon href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </SocialIcon>
            
            <SocialIcon href="https://twitter.com" target="_blank" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
              </svg>
            </SocialIcon>
          </SocialLinks>
        </LeftCol>

        
        <FormCard>
          {submitted ? (
            <StatusMessage>
              Thanks for reaching out! I'll get back to you soon.
            </StatusMessage>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Field>
                <Label htmlFor="email">Your email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Field>

              <Field>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Just saying hi"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Field>

              <Field>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Let's talk about..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Field>

              {error && (
                <StatusMessage $error>
                  {error}
                </StatusMessage>
              )}

              <SubmitButton type="submit" disabled={!isFormValid || loading}>
                {loading ? "Sending..." : "Send Message"}
              </SubmitButton>
            </Form>
          )}
        </FormCard>
      </Container>
    </Wrapper>
  );
};

export default ContactSection;