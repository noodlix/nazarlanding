import { HeroScrollDemo } from "./scrollonpage";
import { Video } from "@/components/ui/video";
import { Table } from "@/components/ui/table";
import { Cards } from "@/components/ui/cards";

export default function Home() {
  return (
    <main>
      <HeroScrollDemo/>
      <Video/>
      <Table/>
      <Cards/>
    </main>
  );
}
