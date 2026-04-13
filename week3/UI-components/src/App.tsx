import { useState } from 'react';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import { getCards } from './services/cardService';
import { type CardItem } from './data/mockCards';

function App() {
  // We initialize the state directly with the data. 
  // No Effect needed for synchronous data!
  const [cards] = useState<CardItem[]>(() => getCards());

  return (
    <div style={{ padding: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {cards.map(card => (
        <Card 
          key={card.id}
          title={card.title}
          type={card.type}
          imageUrl={card.imageUrl}
          badgeLabel={card.badgeLabel}
          badgeStatus={card.status}
          footer={
            <Button 
                text="View Details" 
                variant={card.type === "black" ? "secondary" : "primary"}
                onClick={() => alert(`Clicked on ${card.title}`)}
            />
          }
        />
      ))}
    </div>
  );
}

export default App;