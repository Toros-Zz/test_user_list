import "./UserCard.css";

interface DetailLineProps {
  label: string;
  text: string;
  href?: string;
}

const DetailLine = ({ label, text, href }: DetailLineProps) => {
  return (
    <div className="DetailLine">
      <span className="DetailLine__label">{label}</span>
      {href ? (
        <a href={href}>{text}</a>
      ) : (
        <span className="DetailLine__text">{text}</span>
      )}
    </div>
  );
};

interface UserCardProps {
  person: Person;
}

export const UserCard = ({ person }: UserCardProps) => {
  return (
    <section className="UserCard">
      <section className="UserCard__header">
        <img
          className="UserCard__foto"
          src={`foto/${person.photo}`}
          alt={person.name}
        />
        <span>{person.name}</span>
        <span>{person.position}</span>
      </section>

      <div className="UserCard__line" />

      <section className="UserCard__details">
        <DetailLine label="Phone" text={person.phone} />
        <DetailLine label="Nick name" text={person.nickname} />
        <DetailLine
          label="Email"
          text={person.email}
          href={`mailto: ${person.email}`}
        />

        <button className="UserCard__send-button">Send message</button>
      </section>
    </section>
  );
};
