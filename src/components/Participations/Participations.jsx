import { participations, certifications } from '../../data';
import useReveal from '../../hooks/useReveal';
import { ExternalIcon } from '../Icons';
import './Participations.css';

function Badge({ title, sub, certificate }) {
  return (
    <li className="card badge">
      <h4>{title}</h4>
      {sub && <p>{sub}</p>}
      {certificate && (
        <a href={certificate} target="_blank" rel="noreferrer">
          <ExternalIcon /> View Certificate
        </a>
      )}
    </li>
  );
}

export default function Participations() {
  const ref = useReveal();
  return (
    <section id="participations" className="section">
      <div className="container reveal" ref={ref}>
        <h2 className="sec-title"><span className="idx">// 04.</span> Participations</h2>
        <ul className="badges">
          {participations.map((p) => <Badge key={p.title} title={p.title} certificate={p.certificate} />)}
        </ul>

        <h3 className="subhead">certifications</h3>
        <ul className="badges">
          {certifications.map((c) => <Badge key={c.title} title={c.title} sub={c.issuer} certificate={c.certificate} />)}
        </ul>
      </div>
    </section>
  );
}
