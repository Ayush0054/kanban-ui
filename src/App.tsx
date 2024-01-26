/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

import {
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
  card10,
  card11,
  card12,
  card13,
  card14,
  card15,
} from "./data";
import Navbar from "./components/navbar";
import Header from "./components/header";
import ListTitle from "./components/listTitle";
import Cards from "./components/cards";
import { ScrollArea, ScrollBar } from "./components/ui/scroll-area";

function App() {
  //cards
  const [columns, setColumns] = useState({
    column1: [card1, card2, card3],
    column2: [card4, card5, card15],
    column3: [card6, card7, card8],
    column4: [card9, card10, card11],
    column5: [card12, card13, card14],
  });

  return (
    <main>
      <Navbar />
      <Header />
      <ScrollArea className="">
        {/* column mapping */}
        <div className="flex items-center justify-evenly ">
          {Object.keys(columns).map((columnId, index) => (
            <ListTitle
              key={columnId}
              //@ts-ignore
              props={{ t: `Column ${index + 1}` }}
            />
          ))}
        </div>
        {/* card mapping with column id */}
        <div className="flex justify-evenly">
          {Object.entries(columns).map(([columnId, cards]) => (
            <div key={columnId} id={columnId}>
              {cards.map((card) => (
                <Cards key={card.id} props={{ ...card, columnId }} />
              ))}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="  bg-gray-300 " />
      </ScrollArea>
    </main>
  );
}

export default App;
