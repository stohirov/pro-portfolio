const ITEMS = [
  "Java",
  "Spring Boot",
  "Kafka",
  "PostgreSQL",
  "Kubernetes",
  "AWS",
  "Redis",
  "Terraform",
  "ClickHouse",
  "Microservices",
  "Spring Cloud",
  "Distributed Systems",
];

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[...ITEMS, ...ITEMS].map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </div>
  );
}
