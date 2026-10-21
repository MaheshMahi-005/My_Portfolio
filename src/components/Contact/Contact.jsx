import { useState } from 'react';
import { profile } from '../../data';
import useReveal from '../../hooks/useReveal';
import { MailIcon, PhoneIcon, GitHubIcon, LinkedInIcon } from '../Icons';
import './Contact.css';

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Opens the visitor's email app with the message filled in (no backend needed).
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container reveal" ref={ref}>
        <h2 className="sec-title"><span className="idx">// 06.</span> Contact</h2>
        <div className="contact">
          <form className="contact__form" onSubmit={onSubmit}>
            <label>
              Name
              <input name="name" type="text" value={form.name} onChange={onChange} required autoComplete="name" />
            </label>
            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={onChange} required autoComplete="email" />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" value={form.message} onChange={onChange} required />
            </label>
            <button type="submit" className="btn btn--solid">Send message</button>
            {sent && <p className="contact__note" role="status">Your email app should open with the message ready to send.</p>}
          </form>

          <ul className="contact__details">
            <li><MailIcon /><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><PhoneIcon /><a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>{profile.phone}</a></li>
            <li><GitHubIcon /><a href={profile.github} target="_blank" rel="noreferrer">github.com/MaheshMahi-005</a></li>
            <li><LinkedInIcon /><a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/mahesh-chandra-785bb535a</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
