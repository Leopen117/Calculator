import "bootstrap/dist/css/bootstrap.css";
import { Container } from "./components.js/container";

export default function Home() {
  return (
    <div className=" bg-secondary text-center vh-100">
      <div className=" h-50 position-absolute top-50 start-50 translate-middle">
        <Container></Container>
      </div>
    </div>
  );
}
