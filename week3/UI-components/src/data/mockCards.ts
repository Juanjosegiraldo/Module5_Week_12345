// Definition of the Card data structure
export interface CardItem {
    id: number;
    title: string;
    type: "green" | "white" | "black";
    imageUrl?: string;
    status: "success" | "warning" | "info" | "error" | "neutral";
    badgeLabel: string;
}

// Mock data for the exercise
export const CARDS_DATA: CardItem[] = [
    { id: 1, title: "Project Alpha", type: "white", status: "success", badgeLabel: "Active", imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300" },
    { id: 2, title: "System Error", type: "black", status: "error", badgeLabel: "Urgent" },
    { id: 3, title: "New Update", type: "green", status: "info", badgeLabel: "New" },
];