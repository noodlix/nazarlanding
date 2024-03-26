import { Video } from "@/components/ui/video";
import { Table } from "@/components/ui/table";
import { Cards } from "@/components/ui/cards";
import { Hero } from "./hero";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Video/>
      <Table/>
      <Cards/>
    </main>
  );
}
